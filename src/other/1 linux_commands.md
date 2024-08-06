---
title: Linux 常用命令
order: 2
tag:
  - Linux
  - 命令
editLink: false
---

````markmap
---
markmap:
  colorFreezeLevel: 2
---

# Linux 命令

## 文件系统
### 创建
- `touch` 创建文件
- `mkdir` 创建目录
### 复制
- `cp` 复制文件
### 权限
- `chmod` 修改权限
- `chown` 修改文件所属用户
### 删除
- `rm` 删除文件
- `rmdir` 删除空目录
### 移动
- `mv` 移动文件
### 查看
- `pwd`  显示当前目录
- `ls`   查看目录下的文件以及目录
- `cat`  查看文件内容
- `head` 查看文件头
- `tail` 查看文件尾
- `less` 文件内容分页查看
### 查找
- `grep` 查找文件内容
   - `grep "hello" *.cpp` 查找当前目录下所有后缀名为 cpp 的文件中包含 hello 的文件
- `find` 查找文件
   - `find . -name "*.cpp"` 查找当前目录下所有后缀名为 cpp 的文件
### 编辑
- `sed` 文件流编辑
  - `sed -i 's/hello/world/' a.cpp` 替换a.cpp文件中 hello 为 world
- `vim` 文件编辑
## 进程管理
- `ps` 查看进程列表
  - `ps -ef` 查看所有进程列表
- `top` 查看进程列表以及资源占用情况
- `kill` 终止进程
- `pstack` 查看进程堆栈
  - `pstack 进程号`
- `killall` 终止进程

## 内存管理
- `vmstat` 查看虚拟内存使用情况
## 磁盘管理
- `df` 查看磁盘使用情况
  - `df -h` 以人类可读的方式查看磁盘使用情况
- `du` 查看磁盘空间占用情况
## 网络管理
- `ifconfig` 查看网络配置
- `netstat` 查看网络连接统计信息
- `ping` 测试网络连通性
- `traceroute` 查看网络路由
- `dig` 查询域名信息

## 用户管理
- `useradd` 添加用户
- `userdel` 删除用户
- `passwd` 修改用户密码
- `su` 切换用户
- `sudo` 提权

````
