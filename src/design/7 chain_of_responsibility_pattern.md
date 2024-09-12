---
title: 责任链模式
order: 2
category:
  - 架构设计
tag:
  - c++
  - 设计模式
  - 责任链模式
editLink: false
description: "行为型设计模式，责任链模式（Chain of Responsibility Pattern）允许多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合。该模式将这些对象连成一条链，并沿着这条链传递请求，直到有对象处理它为止"
sticky: 805
head:
  - - meta
    - name: keywords
      content: 设计模式 责任链模式 行为型设计模式 Chain of Responsibility Pattern
---

### 概述

**责任链模式**（Chain of Responsibility Pattern）是一种行为设计模式，它允许多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合。该模式将这些对象连成一条链，并沿着这条链传递请求，直到有对象处理它为止。

### 结构

责任链模式的核心思想是将请求沿着一条链传递，每个链上的对象都有机会处理请求。如果当前对象无法处理该请求，则将其传递给下一个对象，直到找到能够处理请求的对象。

这个模式主要包括以下几个部分：

- **处理者（Handler）**：接口或抽象类，定义了处理请求的抽象方法，同时维护一个指向下一个处理者的引用。
- **具体处理者（Concrete Handler）**：实现了处理者接口，负责处理具体的请求。
- **请求**：需要沿着责任链传递的请求。

### [示例](https://github.com/hackcpp/cplusplus/blob/main/source%20code/design_pattern/chain_of_responsibility.cpp)

下面是一个用 C++ 实现的请假流程处理的责任链模式示例。这个示例模拟了请假请求根据天数由不同级别的领导审批的场景。

@startuml 类图
abstract class ILeveHandler {
+void setNextHandler(ILeveHandler* handler)
+{abstract} virtual bool handleRequest(int days)
-ILeveHandler* nextHandler
}

ILeveHandler <|... TeamLeaderHandler : 实现 
ILeveHandler <|... ManagerHandler : 实现 
ILeveHandler <|... DirectorHandler : 实现 

ILeveHandler *--> ILeveHandler : 拥有 

class TeamLeaderHandler {
+bool handleRequest(int days) override
}
class ManagerHandler {
+bool handleRequest(int days) override
}
class DirectorHandler {
+bool handleRequest(int days) override
}

@enduml

```cpp
#include <iostream>
#include <memory>

// 抽象处理者类
class LeaveHandler {
protected:
    std::shared_ptr<LeaveHandler> nextHandler;

public:
    // 设置下一个处理者
    void setNextHandler(std::shared_ptr<LeaveHandler> handler) {
        nextHandler = handler;
    }

    // 处理请假请求的虚函数
    virtual bool handleRequest(int days) = 0;
};

// Team Leader 处理类
class TeamLeaderHandler : public LeaveHandler {
public:
    bool handleRequest(int days) override {
        if (days <= 3) {
            std::cout << "Team Leader approved " << days << " days leave." << std::endl;
            return true;
        } else if (nextHandler != nullptr) {
            return nextHandler->handleRequest(days);
        } else {
            return false;
        }
    }
};

// Manager 处理类
class ManagerHandler : public LeaveHandler {
public:
    bool handleRequest(int days) override {
        if (days > 3 && days <= 7) {
            std::cout << "Manager approved " << days << " days leave." << std::endl;
            return true;
        } else if (nextHandler != nullptr) {
            nextHandler->handleRequest(days);
        } else {
            return false;
        }
    }
};

// Director 处理类
class DirectorHandler : public LeaveHandler {
public:
    bool handleRequest(int days) override {
        if (days > 7) {
            std::cout << "Director approved " << days << " days leave." << std::endl;
            return true;
        } else if (nextHandler != nullptr) {
            nextHandler->handleRequest(days);
        } else {
            return false;
        }
    }
};

int main() {
    // 创建处理者对象
    std::shared_ptr<LeaveHandler> teamLeader = std::make_shared<TeamLeaderHandler>();
    std::shared_ptr<LeaveHandler> manager = std::make_shared<ManagerHandler>();
    std::shared_ptr<LeaveHandler> director = std::make_shared<DirectorHandler>();

    // 设置责任链
    teamLeader->setNextHandler(manager);
    manager->setNextHandler(director);

    // 发送不同天数的请假请求
    int leaveDays1 = 2;  // 由 Team Leader 处理
    int leaveDays2 = 5;  // 由 Manager 处理
    int leaveDays3 = 10; // 由 Director 处理

    teamLeader->handleRequest(leaveDays1);
    teamLeader->handleRequest(leaveDays2);
    teamLeader->handleRequest(leaveDays3);

    return 0;
}
```

运行上述代码后，输出结果如下：

```plaintext
Team Leader approved 2 days leave.
Manager approved 5 days leave.
Director approved 10 days leave.
```

### 应用场景

- **请求处理链**：例如在 Web 服务器中，处理请求的各个过滤器（Filter）构成了一条责任链，每个过滤器负责处理特定类型的请求。
- **事件处理系统**：在图形用户界面（GUI）中，事件处理链可以使用责任链模式，将事件沿着组件树传递，直到某个组件处理该事件。
- **日志处理**：在日志框架中，多个日志处理器（如控制台日志、文件日志、远程日志等）可以组成责任链，依次处理日志信息。

::: tip 总结

责任链模式通过将请求沿着一条链传递，实现了请求的解耦处理。它使得请求的发送者和接收者之间不再紧耦合，增强了系统的灵活性和可扩展性。在某些需要链式处理请求的场景中，责任链模式非常有用，但也需要注意链条过长带来的性能问题。
:::