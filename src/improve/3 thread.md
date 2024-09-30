---
title: 线程编程
order: 2
category:
  - 面试题
tag:
  - c++ 
  - 多线程
  - 线程同步
---

## 如何创建线程？

[C++11](/interview/4%20c++11)引入了[std::thread](https://en.cppreference.com/w/cpp/thread/thread)来创建线程，支持对线程join或者detach。直接看代码：

``` cpp
// thread example
#include <iostream>       // std::cout
#include <thread>         // std::thread
 
void foo() 
{
  // do stuff...
}

void bar(int x)
{
  // do stuff...
}

int main() 
{
  std::thread first (foo);     // spawn new thread that calls foo()
  std::thread second (bar,0);  // spawn new thread that calls bar(0)

  std::cout << "main, foo and bar now execute concurrently...\n";

  // synchronize threads:
  first.join();                // pauses until first finishes
  second.join();               // pauses until second finishes

  std::cout << "foo and bar completed.\n";

  return 0;
}
```

上述代码中，函数 $foo()$ 和 $bar(0)$ 分别运行在线程对象 $first$ 和 $second$ 中，从刚创建对象开始就会新建一个线程用于执行函数，调用 $join()$ 函数将会阻塞主线程，直到线程函数执行结束，线程函数的返回值将会被忽略。如果不希望线程被阻塞执行，可以调用线程对象的 $detach()$ 函数，表示将线程和线程对象分离，新的线程与主线程没有任何关联，线程资源在任务结束后会由操作系统自动回收。

如果没有调用 $join()$ 或者 $detach()$ 函数，假如线程函数执行时间较长，此时线程对象的生命周期结束调用析构函数清理资源，这时可能会发生crash，这里有两种解决办法，一个是调用 $join()$，保证线程函数的生命周期和线程对象的生命周期相同，另一个是调用 $detach()$，将线程和线程对象分离，这里需要注意，如果线程已经和对象分离，那我们就再也无法控制线程什么时候结束了，不能再通过join来等待线程执行完成。

## 线程同步机制 

### 1. [互斥量 (Mutex)](https://en.cppreference.com/w/cpp/thread/mutex)

**实现原理**：

互斥量的核心原理是通过锁定和解锁机制来控制对共享资源的访问。具体实现步骤如下：

1. **基本结构**：
   - 互斥量有一个内部状态，通常用布尔值或整数表示（锁定或未锁定）。
   - 维护一个等待队列，用于保存等待锁的线程。

2. **锁定 (Lock)**：
   - 当一个线程尝试锁定互斥量时，如果互斥量未锁定，则线程成功锁定，并将互斥量状态设置为锁定。
   - 如果互斥量已锁定，则该线程进入等待队列并挂起，直到互斥量被解锁。

3. **解锁 (Unlock)**：
   - 当一个线程解锁互斥量时，如果等待队列中有其他线程，则唤醒一个线程，使其尝试重新锁定互斥量。
   - 如果没有线程在等待，则将互斥量状态设置为未锁定。

**代码示例**：

```cpp
#include <iostream>
#include <thread>
#include <mutex>

std::mutex mtx;

void print_thread_id(int id) {
    std::lock_guard<std::mutex> guard(mtx); // 自动加锁和解锁
    std::cout << "Thread #" << id << std::endl;
}

int main() {
    std::thread threads[10];
    for (int i = 0; i < 10; ++i) {
        threads[i] = std::thread(print_thread_id, i);
    }
    for (auto& th : threads) {
        th.join();
    }
    return 0;
}
```

### 2. [读写锁 (Shared Mutex)](https://en.cppreference.com/w/cpp/thread/shared_mutex)

**实现原理**：

读写锁允许多个线程同时读取，但在写入时只允许一个线程操作。其实现原理如下：

1. **基本结构**：
   - 读写锁包含两个计数器：一个用于记录当前正在读取的线程数，另一个用于记录是否有写线程在等待。
   - 维护一个等待队列，用于保存等待的线程。

2. **读锁定 (Read Lock)**：
   - 当一个线程请求读锁定时，如果没有写锁存在，则增加读计数器，线程继续执行。
   - 如果有写锁存在，则线程进入等待队列。

3. **写锁定 (Write Lock)**：
   - 当一个线程请求写锁定时，如果没有读锁和写锁存在，则锁定成功。
   - 如果有读锁或写锁存在，则线程进入等待队列。

4. **解锁 (Unlock)**：
   - 当读线程解锁时，减少读计数器，如果读计数器为0且有写线程在等待，则唤醒一个写线程。
   - 当写线程解锁时，如果有读线程在等待，则唤醒所有读线程；如果有写线程在等待，则唤醒一个写线程。

**代码示例**：

```cpp
#include <iostream>
#include <thread>
#include <shared_mutex>
#include <vector>

std::shared_mutex rw_mtx;
std::vector<int> data;

void reader() {
    std::shared_lock<std::shared_mutex> lock(rw_mtx);
    for (const auto& d : data) {
        std::cout << d << " ";
    }
    std::cout << std::endl;
}

void writer(int value) {
    std::unique_lock<std::shared_mutex> lock(rw_mtx);
    data.push_back(value);
}

int main() {
    std::thread t1(writer, 1);
    std::thread t2(reader);
    std::thread t3(writer, 2);
    std::thread t4(reader);

    t1.join();
    t2.join();
    t3.join();
    t4.join();

    return 0;
}
```

### 3. [条件变量 (Condition Variable)](https://en.cppreference.com/w/cpp/thread/condition_variable)

**实现原理**：

条件变量用于线程之间的等待和通知机制。其实现原理如下：

1. **基本结构**：
   - 条件变量与一个互斥量和一个条件状态相关联。
   - 维护一个等待队列，用于保存等待条件的线程。

2. **等待 (Wait)**：
   - 线程在等待条件变量时，需要持有相关的互斥量。
   - 线程将自己添加到等待队列，并释放互斥量，等待条件变量的通知。

3. **通知 (Notify)**：
   - 当一个线程修改条件状态并调用 `notify_one` 或 `notify_all` 时，唤醒一个或所有等待队列中的线程。
   - 被唤醒的线程重新获得互斥量，检查条件状态，如果条件满足，线程继续执行；如果条件不满足，线程再次进入等待状态。

**代码示例**：

```cpp
#include <iostream>
#include <thread>
#include <mutex>
#include <condition_variable>

std::mutex cv_mtx;
std::condition_variable cv;
bool ready = false;

void print_id(int id) {
    std::unique_lock<std::mutex> lock(cv_mtx);
    cv.wait(lock, [] { return ready; }); // 等待 ready 变为 true
    std::cout << "Thread #" << id << std::endl;
}

void set_ready() {
    std::this_thread::sleep_for(std::chrono::seconds(1));
    {
        std::lock_guard<std::mutex> lock(cv_mtx);
        ready = true;
    }
    cv.notify_all(); // 唤醒所有等待的线程
}

int main() {
    std::thread threads[10];
    for (int i = 0; i < 10; ++i) {
        threads[i] = std::thread(print_id, i);
    }
    std::thread t(set_ready);
    for (auto& th : threads) {
        th.join();
    }
    t.join();
    return 0;
}
```

**使用场景**：
- 条件变量常用于线程之间的协调，例如在生产者-消费者模型中，生产者线程通知消费者线程有新数据可用，消费者线程等待该通知。

### 4. [原子操作 (Atomic Operations)](https://en.cppreference.com/w/cpp/atomic/atomic)

**实现原理**：

原子操作通过硬件支持的指令集实现，保证在并发环境下操作的不可分割性。其实现原理如下：

1. **硬件支持**：
   - 原子操作依赖于硬件提供的原子指令，如 `compare-and-swap` (CAS)、`fetch-and-add` 等，这些指令能够确保在多个线程操作同一数据时不会产生竞争条件。

2. **内存模型**：
   - C++ 中的 `std::atomic` 提供了对不同内存模型的支持，确保在不同平台上实现一致的原子操作行为。

3. **无需锁定**：
   - 原子操作直接操作共享变量，不需要加锁解锁，因此在高并发场景下具有更好的性能。

**代码示例**：

```cpp
#include <iostream>
#include <thread>
#include <atomic>

std::atomic<int> counter(0);

void increment() {
    for (int i = 0; i < 1000; ++i) {
        ++counter; // 原子操作
    }
}

int main() {
    std::thread threads[10];
    for (int i = 0; i < 10; ++i) {
        threads[i] = std::thread(increment);
    }
    for (auto& th : threads) {
        th.join();
    }
    std::cout << "Final counter value: " << counter << std::endl;
    return 0;
}
```

**使用场景**：
- 原子操作适用于需要高效并发访问的场景，如计数器、标志位等，避免使用锁机制带来的开销。

### 5. [信号量 (Semaphore)](https://en.cppreference.com/w/cpp/thread#Semaphores)

**实现原理**：

信号量是一种控制对共享资源访问的计数器，分为计数信号量和二进制信号量。其实现原理如下：

1. **计数器**：
   - 信号量内部维护一个计数器，表示当前可用资源的数量。计数器初始值通常为资源的总量。

2. **P 操作 (等待操作)**：
   - 当一个线程执行 P 操作（`wait` 或 `acquire`）时，计数器减 1。如果计数器值为正，线程继续执行；如果计数器值为零或负，线程进入等待队列，等待资源释放。

3. **V 操作 (释放操作)**：
   - 当一个线程执行 V 操作（`signal` 或 `release`）时，计数器加 1。如果有线程在等待队列中，唤醒一个线程，使其继续执行。

**代码示例**：

```cpp
#include <iostream>
#include <thread>
#include <semaphore>

std::counting_semaphore<1> sem(1);

void worker(int id) {
    sem.acquire(); // P 操作
    std::cout << "Thread #" << id << " is working" << std::endl;
    std::this_thread::sleep_for(std::chrono::seconds(1));
    sem.release(); // V 操作
}

int main() {
    std::thread threads[10];
    for (int i = 0; i < 10; ++i) {
        threads[i] = std::thread(worker, i);
    }
    for (auto& th : threads) {
        th.join();
    }
    return 0;
}
```

**使用场景**：
- 信号量适用于控制对资源的并发访问数量，例如限制同时访问文件的线程数、实现生产者-消费者模型等。

### 6. 自旋锁 (Spinlock)

**实现原理**：

自旋锁是一种忙等待锁，线程在尝试获取锁时会反复检查锁的状态，而不会阻塞或挂起。其实现原理如下：

1. **忙等待**：
   - 当一个线程尝试获取自旋锁时，如果锁已经被其他线程持有，线程将反复检查锁的状态，直到锁可用为止。
   - 自旋锁通常通过硬件的原子操作实现，如 `test-and-set`、`compare-and-swap` 等。

2. **解锁**：
   - 当持有锁的线程释放自旋锁时，其他线程可以成功获取锁并继续执行。

**代码示例**：

```cpp
#include <iostream>
#include <thread>
#include <atomic>

class Spinlock {
    std::atomic_flag flag = ATOMIC_FLAG_INIT;
public:
    void lock() {
        while (flag.test_and_set(std::memory_order_acquire)); // 自旋等待
    }
    void unlock() {
        flag.clear(std::memory_order_release);
    }
};

Spinlock spinlock;

void worker(int id) {
    spinlock.lock();
    std::cout << "Thread #" << id << " is working" << std::endl;
    std::this_thread::sleep_for(std::chrono::seconds(1));
    spinlock.unlock();
}

int main() {
    std::thread threads[10];
    for (int i = 0; i < 10; ++i) {
        threads[i] = std::thread(worker, i);
    }
    for (auto& th : threads) {
        th.join();
    }
    return 0;
}
```

**使用场景**：
- 自旋锁适用于锁定时间非常短的场景，例如在中断上下文或需要避免线程调度开销的情况下使用。

### 7. [屏障 (Barrier)](https://en.cppreference.com/w/cpp/thread/barrier)

**实现原理**：

屏障用于同步一组线程，确保所有线程都到达某个同步点后才能继续执行。其实现原理如下：

1. **计数器**：
   - 屏障内部维护一个计数器，表示已到达屏障的线程数量。每当一个线程到达屏障点时，计数器减 1。

2. **等待机制**：
   - 当计数器达到零时，表示所有线程都已到达屏障点，屏障解除，所有等待的线程继续执行。

**代码示例**：

```cpp
#include <iostream>
#include <thread>
#include <barrier>
#include <vector>

std::barrier sync_point(10);

void worker(int id) {
    std::cout << "Thread #" << id << " is waiting" << std::endl;
    sync_point.arrive_and_wait(); // 等待所有线程到达屏障点
    std::cout << "Thread #" << id << " is proceeding" << std::endl;
}

int main() {
    std::vector<std::thread> threads;
    for (int i = 0; i < 10; ++i) {
        threads.emplace_back(worker, i);
    }
    for (auto& th : threads) {
        th.join();
    }
    return 0;
}
```

**使用场景**：
- 屏障适用于并行计算中需要同步多个线程的场景，例如在每个计算步骤完成后同步所有线程。

### 8. [锁存器 (Latch)](https://en.cppreference.com/w/cpp/thread/latch)

**实现原理**：

锁存器类似于屏障，但只能使用一次，线程等待直到锁存器倒数到零。其实现原理如下：

1. **倒数计数器**：
   - 锁存器内部维护一个倒数计数器，表示需要完成的任务数量。每次完成任务时，计数器减 1。

2. **等待机制**：
   - 当计数器减为零时，所有等待的线程被唤醒，继续执行。 

**代码示例**：

```cpp
#include <iostream>
#include <thread>
#include <latch>
#include <vector>



std::latch sync_point(10);

void worker(int id) {
    std::cout << "Thread #" << id << " has reached the latch point" << std::endl;
    sync_point.count_down(); // 锁存器计数减少
    sync_point.wait(); // 等待所有线程到达锁存器
    std::cout << "Thread #" << id << " is proceeding" << std::endl;
}

int main() {
    std::vector<std::thread> threads;
    for (int i = 0; i < 10; ++i) {
        threads.emplace_back(worker, i);
    }
    for (auto& th : threads) {
        th.join();
    }
    return 0;
}
```

**使用场景**：
- 锁存器适用于需要等待一组线程或任务完成后才能继续执行的场景，例如初始化任务完成后启动主任务。

## 死锁

- 死锁的四个条件(循环等待不可抢占的互斥资源):

1. 禁止抢占(no preemption)：系统资源不能被强制从一个进程(线程)中退出，已经获得的资源在未使用完之前不能被抢占。
2. 等待和保持(hold and wait)：一个进程(线程)因请求资源阻塞时，对已获得的资源保持不放。
3. 互斥(mutual exclusion)：资源只能同时分配给一个进程(线程)，无法多个进程(线程)共享。
4. 循环等待(circular waiting)：一系列进程(线程)互相持有其他进程(线程)所需要的资源。

- 死锁问题的排查

1. [参考 1](https://www.jianshu.com/p/858a2ff19178)

2. [参考 2](https://network.51cto.com/art/202008/623760.htm)

## 无锁编程
无锁编程（Lock-Free Programming）是一种在多线程环境中实现并发访问的技术，目的是避免传统锁机制（如互斥锁）带来的性能开销和死锁风险。无锁编程主要依赖于原子操作和内存序列模型，以确保在没有锁的情况下实现线程安全。

### 1. 基本概念

- **原子操作**：原子操作是不可分割的，多个线程对同一变量进行原子操作时，不会引起数据竞争。
- **CAS (Compare-and-Swap)**：这是无锁编程的核心操作之一，它检查一个变量是否有特定的值，如果是，则将其更改为新值。这个操作是原子的，即在执行时不会被其他线程打断。
- **内存序列模型**：C++ 提供了一组内存序列模型（如 `memory_order_relaxed`、`memory_order_acquire`、`memory_order_release` 等），以控制并发操作的顺序性。

### 2. C++ 中的原子操作

C++11 引入了 `std::atomic` 模板类，为实现无锁编程提供了基础设施。它支持以下操作：

- 原子加载和存储
- 原子递增和递减
- 原子交换
- 原子比较并交换（CAS）

### 3. 使用原子变量实现无锁队列

下面是一个简单的无锁单生产者单消费者队列的实现示例：

```cpp
#include <atomic>
#include <iostream>
#include <thread>
#include <vector>

template <typename T>
class LockFreeQueue {
public:
    LockFreeQueue(size_t capacity)
        : capacity(capacity), head(0), tail(0) {
        buffer = new T[capacity];
    }

    ~LockFreeQueue() {
        delete[] buffer;
    }

    bool enqueue(const T& item) {
        size_t currentTail = tail.load(std::memory_order_relaxed);
        size_t nextTail = (currentTail + 1) % capacity;

        if (nextTail == head.load(std::memory_order_acquire)) {
            return false; // 队列已满
        }

        buffer[currentTail] = item;
        tail.store(nextTail, std::memory_order_release);

        return true;
    }

    bool dequeue(T& item) {
        size_t currentHead = head.load(std::memory_order_relaxed);

        if (currentHead == tail.load(std::memory_order_acquire)) {
            return false; // 队列为空
        }

        item = buffer[currentHead];
        // 使用 memory_order_release 确保更新操作一定在取值之后 
        head.store((currentHead + 1) % capacity, std::memory_order_release);

        return true;
    }

private:
    T* buffer;
    size_t capacity;
    std::atomic<size_t> head;
    std::atomic<size_t> tail;
};

int main() {
    LockFreeQueue<int> queue(10);

    // 启动生产者线程
    std::thread producer([&queue]() {
        for (int i = 0; i < 20; ++i) {
            while (!queue.enqueue(i)) {
                // 如果队列已满，等待
            }
            std::cout << "Produced: " << i << std::endl;
        }
    });

    // 启动消费者线程
    std::thread consumer([&queue]() {
        for (int i = 0; i < 20; ++i) {
            int item;
            while (!queue.dequeue(item)) {
                // 如果队列为空，等待
            }
            std::cout << "Consumed: " << item << std::endl;
        }
    });

    producer.join();
    consumer.join();

    return 0;
}
```


### 4. 代码结构和作用

- **类定义与构造函数**

   ```cpp
   template <typename T>
   class LockFreeQueue {
   public:
       LockFreeQueue(size_t capacity)
           : capacity(capacity), head(0), tail(0) {
           buffer = new T[capacity];
       }

       ~LockFreeQueue() {
           delete[] buffer;
       }
   ```

   - `LockFreeQueue` 类是一个泛型队列，使用模板参数 `T` 来定义队列元素的类型。
   - 构造函数初始化队列的容量 `capacity`，并将 `head` 和 `tail` 指针初始化为 0。
   - 队列使用一个动态分配的数组 `buffer` 来存储元素。

- **`enqueue` 方法**

   ```cpp
   bool enqueue(const T& item) {
       size_t currentTail = tail.load(std::memory_order_relaxed);
       size_t nextTail = (currentTail + 1) % capacity;

       if (nextTail == head.load(std::memory_order_acquire)) {
           return false; // 队列已满
       }

       buffer[currentTail] = item;
       tail.store(nextTail, std::memory_order_release);

       return true;
   }
   ```

   - `enqueue` 方法用于将一个元素插入队列。
   - `tail.load(std::memory_order_relaxed)`：原子地加载当前的尾部指针 `tail` 的值。使用 `memory_order_relaxed` 是因为我们不需要同步其他内存操作，仅仅读取尾部的值。
   - `nextTail = (currentTail + 1) % capacity`：计算插入元素后的尾部指针值，使用取模操作来实现循环队列。
   - `if (nextTail == head.load(std::memory_order_acquire))`：检查队列是否已满。如果 `nextTail` 与头部指针 `head` 相等，说明队列已满。
   - `buffer[currentTail] = item`：将元素存储在当前尾部指针所指向的位置。
   - `tail.store(nextTail, std::memory_order_release)`：将新的尾部指针存储到 `tail`，并使用 `memory_order_release` 以确保插入操作完成后，其他线程能正确地看到更新的尾部指针。

- **`dequeue` 方法**

   ```cpp
   bool dequeue(T& item) {
       size_t currentHead = head.load(std::memory_order_relaxed);

       if (currentHead == tail.load(std::memory_order_acquire)) {
           return false; // 队列为空
       }

       item = buffer[currentHead];
       head.store((currentHead + 1) % capacity, std::memory_order_release);

       return true;
   }
   ```

   - `dequeue` 方法用于从队列中取出一个元素。
   - `currentHead = head.load(std::memory_order_relaxed)`：原子地加载当前的头部指针 `head` 的值。
   - `if (currentHead == tail.load(std::memory_order_acquire))`：检查队列是否为空。如果 `head` 与 `tail` 相等，说明队列为空。
   - `item = buffer[currentHead]`：将头部指针所指向的元素存储到 `item` 中。
   - `head.store((currentHead + 1) % capacity, std::memory_order_release)`：更新头部指针，指向下一个元素的位置，并使用 `memory_order_release` 以确保取出操作完成后，其他线程能正确地看到更新的头部指针。

- **主函数中的生产者和消费者**

   ```cpp
   int main() {
       LockFreeQueue<int> queue(10);

       // 启动生产者线程
       std::thread producer([&queue]() {
           for (int i = 0; i < 20; ++i) {
               while (!queue.enqueue(i)) {
                   // 如果队列已满，等待
               }
               std::cout << "Produced: " << i << std::endl;
           }
       });

       // 启动消费者线程
       std::thread consumer([&queue]() {
           for (int i = 0; i < 20; ++i) {
               int item;
               while (!queue.dequeue(item)) {
                   // 如果队列为空，等待
               }
               std::cout << "Consumed: " << item << std::endl;
           }
       });

       producer.join();
       consumer.join();

       return 0;
   }
   ```

   - 在 `main` 函数中，创建了一个 `LockFreeQueue` 对象 `queue`，容量为 10。
   - 生产者线程 `producer` 向队列中插入元素，使用 `while (!queue.enqueue(i))` 检查插入操作是否成功。如果队列已满，线程会持续等待直到成功插入。
   - 消费者线程 `consumer` 从队列中取出元素，使用 `while (!queue.dequeue(item))` 检查取出操作是否成功。如果队列为空，线程会持续等待直到成功取出元素。
   - 两个线程同时运行，生产者插入数据，消费者取出数据，并输出相应的信息。
   - 最后，通过 `join()` 等待线程完成，确保主线程在两个子线程结束后才退出。

### 5. [内存顺序（Memory Order）](https://en.cppreference.com/w/cpp/atomic/memory_order)

- **`memory_order_relaxed`**：用于没有数据依赖的地方，只要求操作是原子的，不需要同步内存顺序。适用于 `load` 和 `store`，如 `tail.load(std::memory_order_relaxed)`。
- **`memory_order_acquire`**：用于加载操作，以确保加载的结果及其后续的操作不会被重排序到 `acquire` 之前。适用于检查队列是否满或空，如 `head.load(std::memory_order_acquire)`。
- **`memory_order_release`**：用于存储操作，以确保在此之前的所有操作不会被重排序到 `release` 之后。适用于更新指针操作，如 `tail.store(nextTail, std::memory_order_release)`。

