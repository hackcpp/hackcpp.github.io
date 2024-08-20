---
title: 进程编程
order: 2
category:
  - 面试题
tag:
  - c++ 
  - 多进程
  - 进程通信
---

## 进程状态

###  进程的基本状态

1. **新建（New）**：
   - 进程正在被创建，还未进入准备就绪队列。

2. **就绪（Ready）**：
   - 进程已经被创建并准备好执行，等待被调度器分配 CPU 资源。

3. **运行（Running）**：
   - 进程正在 CPU 上执行代码。

4. **阻塞（Blocked）**：
   - 进程无法继续执行，正在等待某个事件（如 I/O 完成、资源可用）发生。

5. **终止（Terminated）**：
   - 进程已完成执行或因某种原因被强制终止，系统将其从内存中移除。

###  进程状态之间的转换

进程在其生命周期内可以在不同状态之间进行转换，以下是常见的状态转换路径：

1. **新建 → 就绪**：
   - 当进程创建完成，分配了必要的资源后，就会进入就绪状态，等待调度器的调度。

2. **就绪 → 运行**：
   - 调度器选择一个就绪的进程并将其分配给 CPU，进程进入运行状态。

3. **运行 → 就绪**：
   - 如果运行中的进程的时间片耗尽，或者由于其他更高优先级的进程需要 CPU，则该进程被挂起并返回到就绪队列中，等待下一次调度。

4. **运行 → 阻塞**：
   - 当进程执行 I/O 操作或等待某个事件发生（如等待信号、等待资源）时，进程进入阻塞状态，CPU 被释放给其他就绪进程。

5. **阻塞 → 就绪**：
   - 当等待的事件发生（如 I/O 完成或资源可用），阻塞的进程会被移回就绪队列，等待再次被调度。

6. **运行 → 终止**：
   - 当进程完成其任务或被强制终止时，进程进入终止状态，系统将其从内存中清除。

### 状态转换示意图

``` mermaid
stateDiagram
    [*] --> 新建: 创建进程
    新建 --> 就绪: 进程创建完成
    就绪 --> 运行: 调度进程
    运行 --> 阻塞: 等待事件
    阻塞 --> 就绪: 事件完成
    运行 --> 就绪: 时间片耗尽/被抢占
    运行 --> 终止: 进程完成/被终止
    终止 --> [*]
```

## 僵尸进程

**僵尸进程**（Zombie Process）是在 UNIX 或类 UNIX 系统（如 Linux）中，子进程终止后，其父进程没有及时调用 `wait()` 或 `waitpid()` 函数回收子进程的退出状态信息，从而导致的进程状态。

具体来说，当一个子进程结束时，它的所有资源（如内存、文件描述符等）都会被操作系统回收，但它的进程描述符（即进程控制块，包含退出状态信息等）仍然保留在系统中。这是为了允许父进程能够获取子进程的退出状态。当父进程调用 `wait()` 或 `waitpid()` 获取子进程的退出状态后，僵尸进程的进程描述符才会被完全清除。

### 僵尸进程的影响

- **资源占用**：虽然僵尸进程不会占用内存或 CPU，但它会占用一个进程表项（即进程描述符）。在系统中，进程表项的数量是有限的，如果有大量僵尸进程存在，可能会导致系统无法创建新进程。
- **系统管理的麻烦**：大量僵尸进程可能会让系统管理者难以管理和监控系统状态。

### 如何避免产生僵尸进程？

避免产生僵尸进程的关键在于确保父进程能够及时处理子进程的退出状态。以下是几种常用的方法：

1. **及时调用 `wait()` 或 [`waitpid()`](/other/4%20waitpid)**：

   父进程在适当的时机调用 `wait()` 或 `waitpid()` 函数，以获取并处理子进程的退出状态，从而防止僵尸进程的产生。

   ```cpp
   pid_t pid = fork();
   if (pid == 0) {
       // 子进程代码
       exit(0);
   } else {
       // 父进程代码
       wait(NULL); // 等待子进程结束并回收资源
   }
   ```

2. **使用 `SIGCHLD` 信号处理子进程的结束**：

   当子进程结束时，父进程会收到 `SIGCHLD` 信号。父进程可以在信号处理程序中调用 `wait()` 或 `waitpid()` 以回收子进程的资源。

   ```cpp
   #include <iostream>
   #include <sys/wait.h>
   #include <unistd.h>
   #include <signal.h>

   void sigchld_handler(int signum) {
       // 等待所有已终止的子进程
       while (waitpid(-1, NULL, WNOHANG) > 0);
   }

   int main() {
       // 注册 SIGCHLD 信号处理程序
       signal(SIGCHLD, sigchld_handler);

       pid_t pid = fork();
       if (pid == 0) {
           // 子进程代码
           exit(0);
       } else {
           // 父进程代码
           // 父进程继续执行其任务
           pause(); // 等待信号（例如 SIGCHLD）
       }

       return 0;
   }
   ```

3. **将子进程的父进程设置为 `init` 进程（或 systemd）**：

   如果父进程在子进程结束前退出，子进程会被 `init` 进程（PID 为 1 的进程）接管。`init` 进程会自动调用 `wait()` 回收子进程的资源，避免僵尸进程的产生。可以通过调用 `fork()` 后使父进程退出，子进程被 `init` 接管。

   ```cpp
   pid_t pid = fork();
   if (pid > 0) {
       // 父进程退出
       exit(0);
   }

   // 子进程继续执行
   // 此时子进程的父进程是 init 进程
   ```

4. **采用 `double fork()` 技术**：

   父进程通过 `fork()` 创建一个子进程，子进程再 `fork()` 创建一个孙子进程，然后子进程立即退出，父进程只需等待子进程的退出状态，孙子进程则由 `init` 进程接管。

   ```cpp
   pid_t pid = fork();
   if (pid == 0) {
       // 第一个子进程
       pid_t pid2 = fork();
       if (pid2 == 0) {
           // 孙子进程
           // 在此处执行需要守护的任务
           exit(0);
       } else {
           // 第一个子进程退出
           exit(0);
       }
   } else {
       // 父进程等待第一个子进程退出
       wait(NULL);
   }
   ```
::: 
僵尸进程是因父进程未及时处理子进程的退出状态而产生的。通过及时调用 `wait()` 系列函数、处理 `SIGCHLD` 信号、使用 `init` 进程接管孤儿进程或采用 `double fork()` 技术，可以有效避免僵尸进程的产生。在实际开发中，选择适当的方法管理子进程的生命周期，对于保持系统的稳定性和资源利用率至关重要。
:::

## 守护进程
在 Linux 系统中，守护进程（Daemon）是一种在后台运行的进程，通常不与任何终端关联。创建守护进程的步骤包括分离进程、关闭标准文件描述符、设置新的会话等。下面是一个用 C++ 创建守护进程的示例代码。

### 代码示例

```cpp
#include <iostream>
#include <unistd.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <signal.h>
#include <stdlib.h>

void createDaemon() {
    pid_t pid;

    // 1. Fork子进程并退出父进程，使子进程在后台运行
    pid = fork();

    if (pid < 0) {
        std::cerr << "Fork failed." << std::endl;
        exit(EXIT_FAILURE);
    }
    if (pid > 0) {
        // 父进程退出
        exit(EXIT_SUCCESS);
    }

    // 2. 创建新的会话，脱离终端
    if (setsid() < 0) {
        std::cerr << "Failed to create new session." << std::endl;
        exit(EXIT_FAILURE);
    }

    // 3. Fork第二个子进程，确保守护进程不能重新打开控制终端
    pid = fork();

    if (pid < 0) {
        std::cerr << "Fork failed." << std::endl;
        exit(EXIT_FAILURE);
    }
    if (pid > 0) {
        // 第一个子进程退出
        exit(EXIT_SUCCESS);
    }

    // 4. 设置文件权限掩码
    umask(0);

    // 5. 更改工作目录
    if (chdir("/") < 0) {
        std::cerr << "Failed to change directory to /." << std::endl;
        exit(EXIT_FAILURE);
    }

    // 6. 关闭标准文件描述符
    close(STDIN_FILENO);
    close(STDOUT_FILENO);
    close(STDERR_FILENO);

    // 7. 将标准文件描述符重定向到 /dev/null
    open("/dev/null", O_RDWR);  // STDIN_FILENO = 0
    dup(0);                     // STDOUT_FILENO = 1
    dup(0);                     // STDERR_FILENO = 2

    // 守护进程的主循环
    while (true) {
        // 执行守护进程的任务
        sleep(10); // 示例：每隔10秒执行一次任务
    }
}

int main() {
    // 创建守护进程
    createDaemon();

    // 守护进程的其他工作逻辑可以写在这里

    return 0;
}
```

### 代码解释

1. **Fork 子进程并退出父进程**：
   - 调用 `fork()` 创建一个子进程。父进程退出，子进程继续运行，从而实现进程在后台运行。

2. **创建新的会话**：
   - 调用 `setsid()` 创建一个新的会话。子进程成为新的会话组长，从而脱离控制终端。

3. **Fork 第二个子进程**：
   - 再次 `fork()`，目的是防止守护进程重新获取控制终端。第一个子进程退出，第二个子进程继续运行。

4. **设置文件权限掩码**：
   - 使用 `umask(0)` 清除文件权限掩码，以确保守护进程创建的新文件有正确的权限。

5. **更改工作目录**：
   - 将当前工作目录更改为根目录（`/`），以避免守护进程占用可卸载的文件系统。

6. **关闭标准文件描述符**：
   - 关闭标准输入、标准输出和标准错误输出文件描述符，守护进程不再依赖于终端。

7. **重定向标准文件描述符**：
   - 将标准文件描述符重定向到 `/dev/null`，即使守护进程尝试读取或写入标准输入输出，也不会有任何操作。

8. **主循环**：
   - 在守护进程的主循环中执行具体任务。可以使用 `sleep()` 模拟周期性任务执行。

### 注意事项

- **信号处理**：守护进程通常需要处理系统信号，如 `SIGTERM` 用于优雅地终止进程。
- **日志记录**：守护进程不能直接输出到终端，通常会使用日志文件或 `syslog` 记录日志。
- **运行权限**：某些守护进程需要特定的权限，如 root 权限，这时需要特别注意权限管理。

以上代码创建了一个简单的守护进程，实际应用中可以根据需求扩展守护进程的功能，如处理信号、写日志等。

## 进程间通信
进程间通信（Inter-rocess Communication，IPC）是操作系统提供的功能，允许不同的进程之间交换数据和信号。在多任务操作系统中，进程是独立的实体，各自拥有独立的内存空间。因此，IPC 成为进程之间协调和数据共享的关键手段。常见的进程间通信方式包括：

### 1. **管道 (Pipes)**
管道是最基本的 IPC 机制，用于在父子进程之间传递数据。管道是一种半双工的通信方式，数据只能单向流动。

- **无名管道 (Anonymous Pipes)**：只能用于有亲缘关系的进程（如父子进程）之间。
- **有名管道 (Named Pipes, FIFO)**：可以用于无亲缘关系的进程之间。

**示例代码**（无名管道）：

```cpp
#include <iostream>
#include <unistd.h>

int main() {
    int fd[2];
    pipe(fd);  // 创建无名管道

    pid_t pid = fork();
    if (pid == 0) {  // 子进程
        close(fd[0]);  // 关闭读端
        const char* msg = "Hello from child process";
        write(fd[1], msg, strlen(msg) + 1);  // 写入管道
        close(fd[1]);  // 关闭写端
    } else {  // 父进程
        close(fd[1]);  // 关闭写端
        char buffer[128];
        read(fd[0], buffer, sizeof(buffer));  // 从管道读取
        std::cout << "Parent received: " << buffer << std::endl;
        close(fd[0]);  // 关闭读端
    }
    return 0;
}
```

### 2. **消息队列 (Message Queues)**
消息队列允许进程以消息为单位进行通信，消息队列可以实现多个进程之间的消息传递和同步。

**示例代码**：

```cpp
#include <iostream>
#include <sys/ipc.h>
#include <sys/msg.h>
#include <cstring>

struct Message {
    long msg_type;
    char msg_text[100];
};

int main() {
    key_t key = ftok("progfile", 65);  // 生成唯一键
    int msgid = msgget(key, 0666 | IPC_CREAT);  // 创建消息队列

    if (fork() == 0) {  // 子进程
        Message msg;
        msg.msg_type = 1;
        strcpy(msg.msg_text, "Hello from child process");
        msgsnd(msgid, &msg, sizeof(msg.msg_text), 0);  // 发送消息
        std::cout << "Message sent from child process" << std::endl;
    } else {  // 父进程
        Message msg;
        msgrcv(msgid, &msg, sizeof(msg.msg_text), 1, 0);  // 接收消息
        std::cout << "Parent received: " << msg.msg_text << std::endl;
        msgctl(msgid, IPC_RMID, NULL);  // 删除消息队列
    }
    return 0;
}
```

### 3. **共享内存 (Shared Memory)**
共享内存是一种高效的进程间通信方式，允许多个进程直接访问同一块内存区域。共享内存速度快，但需要进程间同步机制（如信号量）来避免数据竞争。

**示例代码**：

```cpp
#include <iostream>
#include <sys/ipc.h>
#include <sys/shm.h>
#include <cstring>

int main() {
    key_t key = ftok("shmfile", 65);  // 生成唯一键
    int shmid = shmget(key, 1024, 0666 | IPC_CREAT);  // 创建共享内存

    if (fork() == 0) {  // 子进程
        char* str = (char*) shmat(shmid, (void*)0, 0);  // 连接共享内存
        strcpy(str, "Hello from child process");
        shmdt(str);  // 分离共享内存
    } else {  // 父进程
        wait(NULL);  // 等待子进程完成
        char* str = (char*) shmat(shmid, (void*)0, 0);  // 连接共享内存
        std::cout << "Parent received: " << str << std::endl;
        shmdt(str);  // 分离共享内存
        shmctl(shmid, IPC_RMID, NULL);  // 销毁共享内存
    }
    return 0;
}
```

### 4. **信号量 (Semaphores)**
信号量是一种用于进程间同步的机制，常与共享内存结合使用，以防止多个进程同时访问共享资源。

**示例代码**：

```cpp
#include <iostream>
#include <sys/ipc.h>
#include <sys/sem.h>

union semun {
    int val;
    struct semid_ds *buf;
    unsigned short *array;
    struct seminfo *__buf;
};

void semaphoreWait(int semid) {
    struct sembuf sb = {0, -1, 0};  // 减少信号量
    semop(semid, &sb, 1);
}

void semaphoreSignal(int semid) {
    struct sembuf sb = {0, 1, 0};  // 增加信号量
    semop(semid, &sb, 1);
}

int main() {
    key_t key = ftok("semfile", 65);
    int semid = semget(key, 1, 0666 | IPC_CREAT);
    semun sem_union;
    sem_union.val = 1;
    semctl(semid, 0, SETVAL, sem_union);  // 初始化信号量

    if (fork() == 0) {  // 子进程
        semaphoreWait(semid);
        std::cout << "Child process is in critical section" << std::endl;
        sleep(2);
        std::cout << "Child process leaving critical section" << std::endl;
        semaphoreSignal(semid);
    } else {  // 父进程
        semaphoreWait(semid);
        std::cout << "Parent process is in critical section" << std::endl;
        sleep(2);
        std::cout << "Parent process leaving critical section" << std::endl;
        semaphoreSignal(semid);

        wait(NULL);  // 等待子进程完成
        semctl(semid, 0, IPC_RMID);  // 删除信号量
    }

    return 0;
}
```

### 5. **信号 (Signals)**
信号是一种异步通知机制，用于通知进程某个事件发生。信号可以用于进程间的简单通信或异常处理。

**示例代码**：

```cpp
#include <iostream>
#include <csignal>
#include <unistd.h>

void signalHandler(int signum) {
    std::cout << "Interrupt signal (" << signum << ") received.\n";
    exit(signum);
}

int main() {
    signal(SIGINT, signalHandler);  // 注册信号处理程序

    std::cout << "Waiting for signal SIGINT (Ctrl+C)...\n";
    while (true) {
        sleep(1);  // 模拟进程在运行
    }

    return 0;
}
```

### 6. **套接字 (Sockets)**
套接字是一种网络通信的进程间通信方式，适用于分布式系统中的进程间通信。它支持 TCP 和 UDP 两种模式，可以用于不同主机之间的进程通信。

**示例代码**（TCP 套接字）：

```cpp
// server.cpp
#include <iostream>
#include <sys/socket.h>
#include <netinet/in.h>
#include <unistd.h>

int main() {
    int server_fd = socket(AF_INET, SOCK_STREAM, 0);
    sockaddr_in address = {AF_INET, htons(8080), INADDR_ANY};
    bind(server_fd, (struct sockaddr*)&address, sizeof(address));
    listen(server_fd, 3);

    int new_socket = accept(server_fd, NULL, NULL);
    const char* msg = "Hello from server";
    send(new_socket, msg, strlen(msg), 0);
    close(new_socket);
    close(server_fd);

    return 0;
}

// client.cpp
#include <iostream>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <unistd.h>

int main() {
    int sock = socket(AF_INET, SOCK_STREAM, 0);
    sockaddr_in serv_addr = {AF_INET, htons(8080), inet_addr("127.0.0.1")};

    connect(sock, (struct sockaddr*)&serv_addr, sizeof(serv_addr));
    char buffer[1024] = {0};
    read(sock, buffer, sizeof(buffer));
    std::cout << "Message from server: " << buffer << std::endl;
    close(sock);

    return 0;
}
```

### 总结

进程间通信是操作系统中用于协调和共享数据的重要机制。根据应用场景的不同，可以选择不同的 IPC 方式，如管道、消息队列、共享内存、信号量、信

号和套接字。每种通信方式都有其优缺点和适用场景，需要根据需求进行选择。