---
title: waitpid
order: 2
category:
  - 其他
tag:
  - linux
editLink: false
---

`waitpid` 是 Unix/Linux 系统中用于等待子进程状态变化的系统调用。它允许父进程挂起执行，直到指定的子进程终止或者发生了其他指定的状态变化。

### `waitpid` 的语法

```c
pid_t waitpid(pid_t pid, int *status, int options);
```

- **`pid`**: 要等待的子进程的进程 ID，特殊值如下：
  - **`pid > 0`**: 等待进程 ID 为 `pid` 的特定子进程。
  - **`pid == 0`**: 等待任何属于与调用进程相同进程组的子进程。
  - **`pid < -1`**: 等待进程组 ID 等于 `|pid|` 的任何子进程。
  - **`pid == -1`**: 等待任何子进程，即等效于 `wait()`。

- **`status`**: 指向一个 `int` 变量的指针，用于保存子进程的终止状态。

- **`options`**: 可以是 0 或者下列标志的组合：
  - **`WNOHANG`**: 如果没有子进程退出或状态变化，则立即返回，而不阻塞。
  - **`WUNTRACED`**: 当一个子进程停止（例如被 `SIGSTOP` 信号停止）时返回其状态，而不是等到子进程终止。
  - **`WCONTINUED`**: 如果子进程在接收到 `SIGCONT` 信号后继续运行，并且其状态尚未报告，则返回其状态。

### `waitpid` 的返回值

- 成功时，返回等待的子进程的 PID。
- 如果设置了 `WNOHANG` 且没有立即可用的子进程终止状态，则返回 `0`。
- 失败时，返回 `-1`，并设置 `errno` 以指示错误。

### `status` 变量解释

`status` 变量是一个整数，包含子进程的状态信息。可以使用一系列宏来解析这个状态值：

- **`WIFEXITED(status)`**：如果子进程正常终止，则返回非零值。
- **`WEXITSTATUS(status)`**：如果子进程正常终止，返回子进程的退出状态码。
- **`WIFSIGNALED(status)`**：如果子进程因信号终止，则返回非零值。
- **`WTERMSIG(status)`**：如果子进程因信号终止，返回导致终止的信号编号。
- **`WIFSTOPPED(status)`**：如果子进程处于停止状态，则返回非零值。
- **`WSTOPSIG(status)`**：如果子进程处于停止状态，返回导致停止的信号编号。
- **`WIFCONTINUED(status)`**：如果子进程已继续执行，则返回非零值（使用 `WCONTINUED` 标志时）。

### 示例代码

以下是一个使用 `waitpid` 等待子进程终止的示例代码：

```cpp
#include <iostream>
#include <sys/wait.h>
#include <unistd.h>

int main() {
    pid_t pid = fork();

    if (pid == 0) {
        // 子进程代码
        std::cout << "Child process running, PID: " << getpid() << std::endl;
        sleep(2);  // 模拟一些工作
        std::cout << "Child process terminating" << std::endl;
        return 42;  // 子进程的退出状态码
    } else if (pid > 0) {
        // 父进程代码
        int status;
        pid_t result = waitpid(pid, &status, 0);  // 等待子进程终止

        if (result == -1) {
            std::cerr << "waitpid failed" << std::endl;
        } else {
            std::cout << "Child process " << result << " terminated" << std::endl;

            if (WIFEXITED(status)) {
                std::cout << "Child exited with status: " << WEXITSTATUS(status) << std::endl;
            } else if (WIFSIGNALED(status)) {
                std::cout << "Child killed by signal: " << WTERMSIG(status) << std::endl;
            } else if (WIFSTOPPED(status)) {
                std::cout << "Child stopped by signal: " << WSTOPSIG(status) << std::endl;
            } else if (WIFCONTINUED(status)) {
                std::cout << "Child continued" << std::endl;
            }
        }
    } else {
        std::cerr << "fork failed" << std::endl;
    }

    return 0;
}
```

### 代码解释

- **`fork()`**: 创建一个子进程。`pid` 为 0 表示子进程，在子进程中执行特定代码。`pid` 为正表示父进程，父进程等待子进程结束。
- **`waitpid(pid, &status, 0)`**: 父进程调用 `waitpid` 等待子进程终止，并获取其退出状态。
- **`WIFEXITED(status)`**: 检查子进程是否正常退出。如果是，`WEXITSTATUS(status)` 将返回子进程的退出状态码。
- **`WIFSIGNALED(status)`**: 检查子进程是否被信号终止。如果是，`WTERMSIG(status)` 将返回导致子进程终止的信号编号。

### `waitpid` 的常见应用

1. **管理多个子进程**：`waitpid` 可以与 `WNOHANG` 选项一起使用，用于轮询多个子进程的状态，适合管理并发运行的子进程。
2. **处理特定子进程**：通过传递特定的 PID，`waitpid` 可以用于等待和管理某个特定子进程的状态变化。
3. **防止僵尸进程**：父进程使用 `waitpid` 回收子进程的退出状态，可以防止僵尸进程的产生。

### 总结

`waitpid` 是一个强大的系统调用，允许父进程灵活地等待和处理子进程的状态变化。通过正确使用 `waitpid`，可以有效地管理并发进程，处理子进程的终止状态，防止僵尸进程。