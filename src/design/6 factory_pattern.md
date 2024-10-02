---
title: 工厂模式
order: 2
category:
  - 架构设计
tag:
  - c++
  - 设计模式
  - 工厂模式
  - 抽象工厂模式
editLink: false
sticky: 602
---

### 概述

**工厂模式**和**抽象工厂模式**都是创建型设计模式，旨在为客户端提供对象的创建方式，而不需要指定创建的具体类。它们的主要区别在于工厂模式适用于创建单一产品，而抽象工厂模式适用于创建相关产品的家族。

### 工厂模式

工厂模式提供了一种创建对象的方式，具体的创建逻辑被封装在工厂类中，客户端通过调用工厂的方法来获取对象，而无需了解具体的创建过程。

#### 结构

1. **产品接口（Product）**：定义了工厂所要创建的对象的接口或抽象类。
2. **具体产品（Concrete Product）**：实现产品接口的具体类。
3. **工厂接口（Creator）**：定义创建产品的方法。
4. **具体工厂（Concrete Creator）**：实现工厂接口，负责具体产品的实例化。

#### 示例

假设我们有一个交通工具的工厂，可以生产汽车和自行车。

@startuml 类图
abstract class Vehicle {
+{abstract} virtual void drive() const
}
Vehicle <|... Car : 实现 
Vehicle <|... Bike : 实现 


class Car {
+void drive() const override
}

class Bike {
+void drive() const override
}

abstract class VehicleFactory {
+{abstract} std::shared_ptr<Vehicle> createVehicle() const
}

VehicleFactory <|-- CarFactory : 实现
VehicleFactory <|-- BikeFactory : 实现

class CarFactory {
  +std::shared_ptr<Vehicle> createVehicle() const override
}

class BikeFactory {
  +std::shared_ptr<Vehicle> createVehicle() const override
}

Car <.. CarFactory : 依赖
Bike <.. BikeFactory : 依赖
@enduml

```cpp
#include <iostream>
#include <memory>

class Vehicle {
public:
    virtual void drive() const = 0;
    virtual ~Vehicle() = default;
};

class Car : public Vehicle {
public:
    void drive() const override {
        std::cout << "Driving a car." << std::endl;
    }
};

class Bike : public Vehicle {
public:
    void drive() const override {
        std::cout << "Riding a bike." << std::endl;
    }
};

class VehicleFactory {
public:
    virtual std::shared_ptr<Vehicle> createVehicle() const = 0;
    virtual ~VehicleFactory() = default;
};

class CarFactory : public VehicleFactory {
public:
    std::shared_ptr<Vehicle> createVehicle() const override {
        return std::make_shared<Car>();
    }
};

class BikeFactory : public VehicleFactory {
public:
    std::shared_ptr<Vehicle> createVehicle() const override {
        return std::make_shared<Bike>();
    }
};

int main() {
    std::shared_ptr<VehicleFactory> carFactory = std::make_shared<CarFactory>();
    std::shared_ptr<VehicleFactory> bikeFactory = std::make_shared<BikeFactory>();

    std::shared_ptr<Vehicle> car = carFactory->createVehicle();
    std::shared_ptr<Vehicle> bike = bikeFactory->createVehicle();

    car->drive();
    bike->drive();

    return 0;
}
```

### 抽象工厂模式

抽象工厂模式提供了一种创建一系列相关或相互依赖对象的接口，而无需指定它们的具体类。抽象工厂模式通常用于创建不同产品族的对象。

#### 结构

1. **抽象产品（Abstract Product）**：定义产品家族中的各个产品的接口。
2. **具体产品（Concrete Product）**：实现具体的产品类。
3. **抽象工厂（Abstract Factory）**：定义创建产品族中各产品的接口。
4. **具体工厂（Concrete Factory）**：实现创建具体产品族的方法。

#### 示例

假设我们有一个操作系统的工厂，可以生产不同操作系统环境下的按钮和文本框。

@startuml 类图
abstract class Button {
+{abstract} virtual void click() const
}
Button <|... WindowsButton : 实现 
Button <|... MacOSButton : 实现 


class WindowsButton {
+void click() const override
}

class MacOSButton {
+void click() const override
}

abstract class TextBox {
+{abstract} virtual void type() const
}
TextBox <|... WindowsTextBox : 实现 
TextBox <|... MacOSTextBox : 实现 


class WindowsTextBox {
+void type() const override
}

class MacOSTextBox {
+void type() const override
}

abstract class GUIFactory {
+{abstract} virtual std::shared_ptr<Button> createButton() const
+{abstract} virtual std::shared_ptr<TextBox> createTextBox() const
}

GUIFactory <|-- WindowsFactory : 实现
GUIFactory <|-- MacOSFactory : 实现

class WindowsFactory {
  +std::shared_ptr<Button> createButton() const override
  +std::shared_ptr<TextBox> createTextBox() const override
}

class MacOSFactory {
  +std::shared_ptr<Button> createButton() const override
  +std::shared_ptr<TextBox> createTextBox() const override
}

WindowsTextBox <.. WindowsFactory : 依赖
WindowsButton <.. WindowsFactory : 依赖

MacOSTextBox <.. MacOSFactory : 依赖
MacOSButton <.. MacOSFactory : 依赖

@enduml

```cpp
class Button {
public:
    virtual void click() const = 0;
    virtual ~Button() = default;
};

class TextBox {
public:
    virtual void type() const = 0;
    virtual ~TextBox() = default;
};

class WindowsButton : public Button {
public:
    void click() const override {
        std::cout << "Windows Button clicked." << std::endl;
    }
};

class WindowsTextBox : public TextBox {
public:
    void type() const override {
        std::cout << "Typing in Windows TextBox." << std::endl;
    }
};

class MacOSButton : public Button {
public:
    void click() const override {
        std::cout << "MacOS Button clicked." << std::endl;
    }
};

class MacOSTextBox : public TextBox {
public:
    void type() const override {
        std::cout << "Typing in MacOS TextBox." << std::endl;
    }
};

class GUIFactory {
public:
    virtual std::shared_ptr<Button> createButton() const = 0;
    virtual std::shared_ptr<TextBox> createTextBox() const = 0;
    virtual ~GUIFactory() = default;
};

class WindowsFactory : public GUIFactory {
public:
    std::shared_ptr<Button> createButton() const override {
        return std::make_shared<WindowsButton>();
    }

    std::shared_ptr<TextBox> createTextBox() const override {
        return std::make_shared<WindowsTextBox>();
    }
};

class MacOSFactory : public GUIFactory {
public:
    std::shared_ptr<Button> createButton() const override {
        return std::make_shared<MacOSButton>();
    }

    std::shared_ptr<TextBox> createTextBox() const override {
        return std::make_shared<MacOSTextBox>();
    }
};

int main() {
    std::shared_ptr<GUIFactory> factory;

    // 使用Windows工厂创建产品
    factory = std::make_shared<WindowsFactory>();
    std::shared_ptr<Button> winButton = factory->createButton();
    std::shared_ptr<TextBox> winTextBox = factory->createTextBox();
    winButton->click();
    winTextBox->type();

    // 使用MacOS工厂创建产品
    factory = std::make_shared<MacOSFactory>();
    std::shared_ptr<Button> macButton = factory->createButton();
    std::shared_ptr<TextBox> macTextBox = factory->createTextBox();
    macButton->click();
    macTextBox->type();

    return 0;
}
```

::: tip 总结

- **工厂模式**：用于创建单一类型的对象，将对象的实例化过程封装在工厂类中，减少客户端与具体类的耦合。
  
- **抽象工厂模式**：用于创建一系列相关或相互依赖的对象，通过定义一组工厂接口，客户端可以使用这些接口创建具体的产品对象，适用于需要创建多个产品族的场景。
:::

这两种模式都可以提高代码的灵活性和可维护性，特别是在需要扩展产品种类或改变产品族的实现时，非常有用。