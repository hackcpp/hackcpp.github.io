---
title: gdb 基本使用
order: 2
category:
  - 工具
tag:
  - gdb
  - Linux
  - 调试
editLink: false
---

GNU 调试器（GDB）是一个功能强大的调试工具，广泛用于调试 C、C++、Fortran 等编程语言。GDB 支持的主要功能包括设置断点、检查程序状态、修改变量值、单步执行代码等。以下将详细介绍 GDB 的基本用法、常用命令以及高级功能。

## GDB 基本用法

### 启动 GDB

GDB 可以通过以下方式启动：

```bash
gdb <program>         # 加载指定的可执行文件
gdb <program> <core>  # 加载可执行文件和崩溃时生成的 core dump 文件
gdb --args <program> <args>  # 启动带参数的程序
```

启动 GDB 后，会进入一个交互式命令行界面，等待用户输入调试命令。

### 启动程序

在 GDB 内部启动程序，可以使用 `run` 命令：

```gdb
(gdb) run              # 直接运行程序
(gdb) run <args>       # 运行程序并传递参数
```

### 设置断点

断点是调试时用于暂停程序执行的标志。通过 `break` 命令设置断点，常用格式包括：

```gdb
(gdb) break main                     # 在主函数处设置断点
(gdb) break foo                      # 在函数 foo() 入口处设置断点
(gdb) break 42                       # 在源文件的第 42 行处设置断点
(gdb) break file.cpp:42              # 在 file.cpp 文件的第 42 行处设置断点
(gdb) break file.cpp:foo             # 在 file.cpp 文件的 foo() 函数入口处设置断点
(gdb) break class::method            # 在类的某个方法上设置断点
(gdb) tbreak main                    # 设置一次性断点，程序执行到断点处后自动删除
```

查看已设置的断点：

```gdb
(gdb) info breakpoints               # 列出所有断点
```

删除断点：

```gdb
(gdb) delete <breakpoint_number>     # 删除指定的断点
(gdb) clear <location>               # 删除指定位置的所有断点
```

### 单步执行

GDB 提供多种单步执行命令，用于逐行或逐指令执行程序：

```gdb
(gdb) next          # 执行下一行源代码，不进入函数内部
(gdb) step          # 执行下一行源代码，进入函数内部
(gdb) continue      # 继续执行程序，直到下一个断点或程序结束
(gdb) finish        # 执行当前函数并返回到调用处
(gdb) until <location>  # 执行代码，直到指定位置（行号或函数）
```

### 检查程序状态

调试时经常需要查看程序当前的状态，包括堆栈、变量、内存等信息：

- **查看堆栈**：`backtrace` 命令用于查看当前的调用堆栈。

```gdb
(gdb) backtrace                 # 查看整个调用堆栈
(gdb) frame <n>                 # 切换到第 n 层堆栈帧
(gdb) info frame                # 查看当前帧的详细信息
```

- **查看变量**：使用 `print` 命令查看变量的值。

```gdb
(gdb) print var                  # 查看变量 var 的值
(gdb) print *pointer             # 查看指针指向的数据
(gdb) display var                # 在每次程序暂停时显示变量的值
(gdb) undisplay <n>              # 取消显示变量
(gdb) info locals                # 查看当前函数的所有局部变量
```

- **修改变量值**：使用 `set` 命令修改变量的值。

```gdb
(gdb) set var = 10               # 将变量 var 设置为 10
(gdb) set $pc = 0x400550         # 修改程序计数器 (PC) 的值
```

- **查看内存**：`x` 命令用于查看内存中的内容。

```gdb
(gdb) x <address>                 # 以十六进制形式查看指定地址的内容
(gdb) x/10x <address>             # 查看从 <address> 开始的 10 个十六进制值
(gdb) x/10i <address>             # 查看从 <address> 开始的 10 条指令
```

### 运行时动态分析

GDB 支持动态调试，可以在程序运行时执行命令以分析程序行为。例如：

- **监视变量变化**：通过 `watch` 命令，GDB 可以在变量值改变时自动暂停程序执行。

```gdb
(gdb) watch var                  # 监视变量 var 的变化
(gdb) rwatch var                 # 监视变量 var 被读取时暂停
(gdb) awatch var                 # 监视变量 var 被读取或写入时暂停
```

- **条件断点**：在断点上添加条件，使其仅在条件满足时触发。

```gdb
(gdb) break foo if x == 5        # 当变量 x 等于 5 时，在 foo 函数处触发断点
```

## 高级功能

### 栈帧调试

GDB 支持调试堆栈帧，可以在不同帧之间切换、查看局部变量、调用函数等。

```gdb
(gdb) frame <n>                  # 切换到第 n 帧
(gdb) info args                  # 查看当前帧的函数参数
(gdb) info locals                # 查看当前帧的局部变量
```

### 动态库调试

调试动态库时，可能需要在库加载后设置断点。这可以通过以下步骤实现：

1. 启动 GDB 并运行程序。
2. 程序暂停时使用 `sharedlibrary` 命令加载动态库的符号。
3. 设置动态库中的断点。

```gdb
(gdb) sharedlibrary              # 加载动态库符号
(gdb) break mylib.c:42           # 在动态库的源文件中设置断点
```

### 多线程调试

GDB 支持调试多线程程序，可以查看线程状态、切换线程、在线程间设置断点等。

- **查看线程**：使用 `info threads` 查看所有线程的信息。

```gdb
(gdb) info threads               # 列出所有线程
(gdb) thread <n>                 # 切换到第 n 个线程
(gdb) thread apply all bt        # 对所有线程执行 backtrace
```

- **线程断点**：设置仅在线程上触发的断点。

```gdb
(gdb) break foo thread 2         # 仅当线程 2 运行到 foo 函数时触发断点
```

### 调试核心转储文件（Core Dump）

核心转储文件（Core Dump）是在程序崩溃时生成的内存映像文件。通过 GDB 可以调试 Core Dump 文件，分析程序崩溃的原因。

```bash
gdb <program> <core>             # 加载 Core Dump 文件
```

加载 Core Dump 文件后，可以使用常规调试命令（如 `backtrace`、`print` 等）分析崩溃时的堆栈和变量状态。


::: tip 总结
GDB 是一个功能强大的调试工具，可以帮助开发者深入分析和调试程序。通过熟练掌握 GDB 的基本用法和高级功能，开发者可以大大提升调试效率，快速定位和解决程序中的问题。
:::

## 参考
- [参考文档](https://sourceware.org/gdb/current/onlinedocs/gdb.html/)
- [GDB配置](/tools/4%20gdbinit)