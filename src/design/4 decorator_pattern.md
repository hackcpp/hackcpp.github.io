---
title: 装饰器模式
order: 2
category:
  - 架构设计
tag:
  - c++
  - 设计模式
  - 装饰器模式
editLink: false
---

### 概述

**装饰器模式**（Decorator Pattern）是一种结构型设计模式，它允许你通过将对象放入包含行为的特殊封装对象中，来为原始对象提供新的行为。这种模式使得我们可以在不改变原始类代码的情况下，动态地添加新的功能。

装饰器模式主要解决的问题是：当系统中出现新的功能需求时，不希望通过修改已有代码或继承来实现，而是希望通过动态组合的方式进行扩展。

### 结构

装饰器模式通常涉及以下几个角色：

1. **组件接口（Component）**：定义对象的接口，可以是抽象类或接口。
2. **具体组件（Concrete Component）**：实现组件接口的具体类。
3. **装饰器类（Decorator）**：实现组件接口，并持有一个组件对象的引用。这个类是装饰器模式的核心，通过在方法中调用组件对象的方法，实现功能的叠加。
4. **具体装饰器（Concrete Decorator）**：继承装饰器类，具体实现要添加的功能。

### 示例

@startuml 类图
abstract class Stream {
+{abstract} virtual std::string read()
}
Stream <|... BufferedStream : 实现 
Stream <|... CryptoStream : 实现 

Stream <|... FileStream : 实现 
Stream <|... NetworkStream : 实现 

BufferedStream *--> Stream : 拥有 
CryptoStream *--> Stream : 拥有 

class FileStream {
  +std::string read() ovverride
}

class NetworkStream {
  +std::string read() ovverride
}

class BufferedStream {
  -Stream* mStream
  +std::string read() ovverride
  -std::string DoBuffer(const std::string&)
}

class CryptoStream {
  -Stream* mStream
  +std::string read() ovverride
  -std::string DoCrypto(const std::string&)
}
@enduml

```cpp
#include <iostream>
#include <string>
/*
装饰器模式：
解决的问题： 在基础类上存在多维度功能的扩展，其中某个维度的扩展是可以叠加的，通过继承的方式会导致子类的‘组合爆炸’
 */

class Stream {
    public:
    virtual std::string read() = 0;
};

class FileStream: public Stream {
    public:
    std::string read() ovverride {
        std::cout << "FileStream::read" << std::endl;
        return "";
    }
};

class NetworkStream: public Stream {
    public:
    std::string read() override {
        std::cout << "NetworkStream::read" << std::endl;
        return "";
    }
};

class MemoryStream: public Stream {
    public:
    std::string read() {
        std::cout << "MemoryStream::read" << std::endl;
        return "";
     }
};

class BufferedStream: public Stream {
    public:
    BufferedStream(Stream* s): mSteam(s) {}
    virtual std::string read() ovverride {
        //..buffer
        return DoBuffer(mSteam->read());
    }
    private:
    std::string DoBuffer(const std::string&) {
        std::cout << "DoBuffer" << std::endl;
        return "";
    }
    private:
    Stream* mSteam = nullptr;
};

class CryptoStream: public Stream {
    public:
    CryptoStream(Stream* s): mSteam(s) {}
    virtual std::string read() {
        //..Crypto
        return DoCrypto(mSteam->read());
    }
    private:
    std::string DoCrypto(const std::string&) {
        std::cout << "DoCrypto" << std::endl;
        return "";
    }
    private:
    Stream* mSteam = nullptr;
};

int main() {
    FileStream* fs = new FileStream();
    //缓冲文件流
    BufferedStream* bfs = new BufferedStream(fs);
    bfs->read();
    //加密文件流
    CryptoStream* cfs = new CryptoStream(fs);
    cfs->read();
    //加密+缓冲 文件流
    CryptoStream* cbfs = new CryptoStream(bfs);
    cbfs->read();
}
```

::: tip 总结
  - 动态扩展对象的功能，灵活性高。
  - 避免了使用继承，减少类的数量。
:::

装饰器模式在需要动态添加功能的场景中非常有用，可以保持代码的开放封闭原则（对扩展开放，对修改封闭），使得系统更容易维护和扩展。