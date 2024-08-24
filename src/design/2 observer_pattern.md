---
title: 观察者模式
order: 2
category:
  - 架构设计
tag:
  - c++
  - 设计模式
  - 观察者模式
  - 事件模式
editLink: false
description: "行为型设计模式，观察者模式（Observer Pattern）"
star: 801
sticky: 801
---

### 概述

**观察者模式**（Observer Pattern）是一种行为型设计模式，定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象。当主题对象的状态发生变化时，所有依赖于它的观察者对象都会收到通知并自动更新。观察者模式通常用于事件驱动的系统，如GUI事件处理、订阅者发布者模型等。

### 结构

观察者模式主要涉及以下几个角色：

1. **主题（Subject）**：持有观察者对象的引用，提供注册、移除和通知观察者的方法。当主题状态改变时，会通知所有已注册的观察者。
2. **观察者（Observer）**：定义一个接口，用于接收主题的通知。所有具体的观察者类实现该接口，以便接收更新。
3. **具体主题（Concrete Subject）**：实现主题接口，维护一个具体的状态。当状态改变时，会通知所有观察者。
4. **具体观察者（Concrete Observer）**：实现观察者接口，负责在接收到主题的通知后进行相应的更新操作。

### 示例

@startuml 类图
abstract class IProgress {
+{abstract} virtual void DoProgress(float value)
}
IProgress <|... MainForm : 实现 

FileSpliter *--> IProgress : 拥有 

class MainForm {
    +void DoProgress(float value) override
}

class FileSpliter {
  -IProgress* mIProgress
  +void splitFile()
  +void setProgress(IProgress* progress)
}
@enduml

```cpp

/*
观察者模式： 用于对象之间的“消息通知”
*/

#include <iostream>

class IProgress {
    public:
    virtual void DoProgress(float value) = 0;
};

class FileSpliter {
public:
    void splitFile() {
        for (int i = 0; i < 100; i++) {
            //....
            if (mIProgress) mIProgress->DoProgress((i+1)*100/100);
        }
    }
    void setProgress(IProgress* progress) {mIProgress = progress;}
private:
    IProgress* mIProgress = nullptr;
};

class MainForm: public IProgress{
    public:
    void DoProgress(float value) override {
        std::cout << value << std::endl;
    }
};

int main() {
    FileSpliter spliter;
    MainForm form;
    spliter.setProgress(&form);
    spliter.splitFile();
}

```

::: tip 总结
  - 观察者模式提供了一种将对象之间的依赖关系解耦的方式，使得对象可以独立变化而不影响彼此。
  - 支持广播通信，当主题状态改变时，所有观察者都可以自动接收到通知。
:::

观察者模式非常适用于需要动态更新和通知机制的场景，例如事件系统、消息传递系统等。通过使用观察者模式，可以有效地管理对象之间的依赖关系，并简化代码结构。