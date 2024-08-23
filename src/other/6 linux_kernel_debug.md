---
title: 利用QEMU+GDB调试Linux内核
order: 2
category:
  - 其他
tag:
  - Linux
  - GDB
  - kernel
  - QEMU
editLink: false
---

使用 QEMU 和 GDB 调试 Linux 内核是一种非常强大的方法，可以帮助开发人员调试和分析内核的行为。下面将详细介绍如何设置和使用 QEMU 和 GDB 来调试 Linux 内核。

### 环境准备

::: tip 系统环境
- 22.04.3-Ubuntu 
- gcc (Ubuntu 11.4.0-1ubuntu1~22.04) 11.4.0
- GNU gdb (Ubuntu 12.1-0ubuntu1~22.04.2) 12.1
:::

#### 编译 Linux 内核源码

```bash
# 获取 Linux 内核源码
wget https://cdn.kernel.org/pub/linux/kernel/v6.x/linux-6.10.6.tar.xz
# 解压
tar -xvf linux-6.10.6.tar.xz
cd linux-6.10.6

# 配置内核（使用默认配置）
make defconfig #运行结束生成 .config 文件在当前目录

# 生成调试符号并编译内核
make -j$(nproc) vmlinux

# 拷贝编译好的镜像备用
cp vmlinux ../
cp arch/x86/boot/bzImage ../
```

::: tip
- `vmlinux`: 一个包含调试符号的未压缩内核映像，GDB 调试时会用到它,在当前目录`linux-6.10.6`
- `bzImage`: 编译后的镜像 bzImage, 路径： `linux-6.10.6/arch/x86/boot/bzImage`
:::

#### 启动文件系统制作
```shell
wget https://busybox.net/downloads/busybox-1.36.1.tar.bz2
tar -xvf busybox-1.36.1.tar.bz2
cd busybox-1.36.1

make menuconfig
#-> Settings
#　--- Build Options
#　　[*] Build static binary (no shared libs) #进行静态编译 (CONFIG_STATIC)

# 安装完成后生成的相关文件会在 _install 目录下
make && make install   
#busybox-1.36.1/_install
cd _install 
mkdir proc
mkdir sys

# init 为内核启动的初始化程序, 内容在下面
vim init 
# 必须设置成可执行文件
chmod +x init  

# 打包启动的文件系统
find . | cpio -o --format=newc > ../../rootfs.img
```
::: tip init 文件内容
```shell
#!/bin/sh
echo "{==DBG==} INIT SCRIPT"
mkdir /tmp
mount -t proc none /proc
mount -t sysfs none /sys
mount -t debugfs none /sys/kernel/debug
mount -t tmpfs none /tmp

mdev -s 
echo -e "{==DBG==} Boot took $(cut -d' ' -f1 /proc/uptime) seconds"

# normal user
setsid /bin/cttyhack setuidgid 1000 /bin/sh
```
:::

####  安装 QEMU 

```bash
apt install qemu qemu-utils qemu-kvm virt-manager libvirt-daemon-system libvirt-clients bridge-utils
```

### 使用 QEMU 启动内核
::: tip
- 确保已经安装QEMU 
- 确保以下文件准备好：
  - rootfs.img
  - bzImage
  - vmlinux 
:::

使用 QEMU 启动内核，并开启 QEMU 的 GDB 远程调试功能。

```bash
#ls 当前目录文件
#busybox-1.36.1 
#busybox-1.36.1.tar.bz2 
#rootfs.img
#bzImage
#vmlinux  
#linux-6.10.6 
#linux-6.10.6.tar.xz

qemu-system-x86_64 -kernel ./bzImage -initrd  ./rootfs.img -append "nokaslr console=ttyS0" -s -S -nographic
```
::: tip 参数说明
- `-kernel ./bzImage`：指定启用的内核镜像；
- `-initrd ./rootfs.img`：指定启动的文件系统；
- `-append "nokaslr console=ttyS0"` ：附加参数，其中 nokaslr 参数必须添加进来，防止内核起始地址随机化，这样会导致 gdb 断点不能命中；
- `-s` ：监听在 gdb 1234 端口；
- `-S` ：表示启动后就挂起，等待 gdb 连接；
- `-nographic`：不启动图形界面，调试信息输出到终端与参数 console=ttyS0 组合使用
:::

此时，QEMU 已经启动并等待 GDB 的连接，CPU 被暂停。

### 使用 GDB 调试内核
在另一个终端中启动 GDB，加载 `vmlinux` 文件（未压缩的内核映像），以便使用调试符号。
```bash
gdb vmlinux
```
在 GDB 中，使用 `target remote` 命令连接到 QEMU 提供的 GDB 服务器：
```bash
(gdb) target remote :1234
```
此时，GDB 已经连接到 QEMU，并可以控制虚拟机的执行。可以在内核的特定位置设置断点，并开始调试。例如，可以设置断点在 `start_kernel` 函数：
```bash
(gdb) b start_kernel
```
然后使用 `continue` 命令继续运行内核：
```bash
(gdb) c
```
当内核运行到 `start_kernel` 时，GDB 会暂停并命中断点，接下来你可以逐步执行代码 (`step` 或 `next` 命令)，查看变量的值等。

####  常用 GDB 命令

- `b <function>`：在函数入口处设置断点。
- `b *<address>`：在特定内存地址设置断点。
- `info breakpoints`：查看当前设置的断点。
- `c`：继续执行程序，直到下一个断点。
- `step`：单步执行代码，进入函数内部。
- `next`：单步执行代码，跳过函数调用。
- `print <variable>`：打印变量的值。
- `x/<n> <address>`：查看指定地址的内存内容。

::: important 注意事项
- 内核编译时需要启用调试符号 (.config 文件`CONFIG_DEBUG_INFO=y`)。
- QEMU 的 `-s` 和 `-S` 参数用于设置 GDB 远程调试的端口和暂停启动。
:::

### 参考：
- [官方文档](https://www.kernel.org/doc/html/latest/translations/zh_CN/dev-tools/gdb-kernel-debugging.html)
- [其他资料1](https://www.ebpf.top/post/qemu_gdb_busybox_debug_kernel/)
- [其他资料2](https://cloud.tencent.com/developer/article/2009491)