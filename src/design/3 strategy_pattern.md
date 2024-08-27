---
title: 策略模式
order: 2
category:
  - 架构设计
tag:
  - c++
  - 设计模式
  - 策略模式
editLink: false
description: "行为型设计模式，策略模式（Strategy Pattern）"
star: 802
sticky: 802
---
### 概述

**策略模式**（Strategy Pattern）是一种行为型设计模式，它定义了一系列算法，并将每个算法封装在独立的策略类中，使得它们可以互相替换。策略模式使得算法的变化不会影响到使用算法的客户类。

### 结构
1. **策略接口**：定义算法的通用接口。
2. **具体策略类**：实现策略接口的不同算法。
3. **上下文类**：持有一个策略对象，并在运行时决定使用哪种策略。

### 示例

下面是一个用C++实现的商品计算折扣的策略模式事例。这个示例模拟了不同折扣率下商品价格的计算。

@startuml 类图
abstract class DiscountStrategy {
+{abstract} virtual double calculate(double price) const
}
DiscountStrategy <|... NoDiscount : 实现 
DiscountStrategy <|... SeasonalDiscount : 实现 

Order *--> DiscountStrategy : 拥有 

class Order {
  -DiscountStrategy* mDiscountStrategy
  +double getFinalPrice(double price) const
  +void setDiscountStrategy(DiscountStrategy* strategy)
}

class NoDiscount {
  +double calculate(double price) const override
}

class SeasonalDiscount {
  +double calculate(double price) const override
}
@enduml

```cpp
// 策略接口
class DiscountStrategy {
public:
    virtual double calculate(double price) const = 0;
};

// 具体策略
class NoDiscount : public DiscountStrategy {
public:
    double calculate(double price) const override {
        return price;
    }
};

class SeasonalDiscount : public DiscountStrategy {
public:
    double calculate(double price) const override {
        return price * 0.9;
    }
};
//other discounts...

// 上下文类
class Order {
    DiscountStrategy* mDiscountStrategy;
public:
    Order(DiscountStrategy* strategy) : mDiscountStrategy(strategy) {}

    double getFinalPrice(double price) const {
        return mDiscountStrategy->calculate(price);
    }
    void setDiscountStrategy(DiscountStrategy* strategy) { 
      mDiscountStrategy = strategy;
    }
};

int main() {
    DiscountStrategy* strategy = new NoDiscount();
    Order order(strategy);
    std::cout << order.getFinalPrice(100) << std::endl;
    delele strategy;
    strategy = new SeasonalDiscount();
    order.setDiscountStrategy(strategy);
    std::cout << order.getFinalPrice(100) << std::endl;
    delele strategy;

    return 0;
}

```

::: tip 总结
- 策略模式可以使得算法独立于使用它的客户端而变化。
- 可以避免使用条件语句来选择不同的算法。
- 提高了代码的可扩展性，当有新的策略出现时，只需增加一个具体策略类，而不需要修改现有代码。
:::

策略模式适用于需要动态选择或更换算法的场景，可以保持代码的灵活性和可扩展性，避免将多个算法逻辑硬编码到一个类中。