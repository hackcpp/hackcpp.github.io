---
title: 桥接模式
order: 2
category:
  - 架构设计
tag:
  - c++
  - 设计模式
  - 桥接模式
editLink: false
description: "结构型设计模式，桥接模式（Bridge Pattern）将抽象部分与实现部分分离，使它们可以独立地变化。桥接模式通过将类的功能层次与实现层次分离，使得系统更具扩展性和灵活性"
star: 804
sticky: 804
head:
  - - meta
    - name: keywords
      content: 设计模式 桥接模式 结构型设计模式 Bridge Pattern
---


### 概述

**桥接模式**（Bridge Pattern）是一种结构型设计模式，它的主要目的是将抽象部分与实现部分分离，使它们可以独立地变化。桥接模式通过将类的功能层次与实现层次分离，使得系统更具扩展性和灵活性。

### 结构

桥接模式涉及以下几个角色：

1. **抽象类（Abstraction）**：定义了抽象的接口，通常包含一个实现部分的引用（实现类接口类型）。
2. **扩展抽象类（Refined Abstraction）**：继承自抽象类，通常是具体的业务逻辑类，调用实现部分的功能。
3. **实现类接口（Implementor）**：定义实现类的接口，但不提供具体实现。实现类接口与抽象类没有继承关系。
4. **具体实现类（Concrete Implementor）**：实现实现类接口，提供具体的实现逻辑。

### [示例](https://github.com/hackcpp/cplusplus/blob/main/source%20code/design_pattern/bridge.cpp)

@startuml 类图
abstract class Color {
+{abstract} virtual void applyColor() const
}
Color <|... RedColor : 实现 
Color <|... BlueColor : 实现 


class RedColor {
+void applyColor() const override
}

class BlueColor {
+void applyColor() const override
}

Shape *--> Color : 拥有 

abstract class Shape {
-std::shared_ptr<Color> color
+{abstract} virtual void draw() const
}

Shape <|-- Circle : 实现
Shape <|-- Square : 实现

class Circle {
  +void draw() const override
}

class Square {
  +void draw() const override
}
@enduml

```cpp
#include <iostream>
#include <memory>

class Color {
public:
    virtual void applyColor() const = 0;
    virtual ~Color() = default;
};

class RedColor : public Color {
public:
    void applyColor() const override {
        std::cout << "Applying red color." << std::endl;
    }
};

class BlueColor : public Color {
public:
    void applyColor() const override {
        std::cout << "Applying blue color." << std::endl;
    }
};

class Shape {
protected:
    std::shared_ptr<Color> color;
public:
    Shape(std::shared_ptr<Color> c) : color(std::move(c)) {}
    virtual void draw() const = 0;
    virtual ~Shape() = default;
};

class Circle : public Shape {
public:
    Circle(std::shared_ptr<Color> c) : Shape(std::move(c)) {}
    void draw() const override {
        std::cout << "Drawing a circle. ";
        color->applyColor();
    }
};

class Square : public Shape {
public:
    Square(std::shared_ptr<Color> c) : Shape(std::move(c)) {}
    void draw() const override {
        std::cout << "Drawing a square. ";
        color->applyColor();
    }
};

int main() {
    // 颜色n * 形状m 种组合
    std::shared_ptr<Color> red = std::make_shared<RedColor>();
    std::shared_ptr<Color> blue = std::make_shared<BlueColor>();

    std::shared_ptr<Shape> redCircle = std::make_shared<Circle>(red);
    std::shared_ptr<Shape> blueSquare = std::make_shared<Square>(blue);

    redCircle->draw();
    blueSquare->draw();

    return 0;
}
```

::: tip 总结
   - **解耦抽象与实现**：通过桥接模式，可以独立地扩展抽象类和实现类，而不会相互影响。
   - **提高系统扩展性**：可以很容易地增加新的形状或颜色，实现类和抽象类之间可以自由组合。
:::

桥接模式非常适合在一个类有多个维度的变化，并且需要将这些维度解耦的场景中使用。通过这种模式，可以保持系统的灵活性，同时避免类爆炸问题。