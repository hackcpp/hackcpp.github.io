---
title: constexpr 实现编译时加密
order: 2
category:
  - 其他
tag:
  - c++
  - constexpr
  - 逆向
editLink: false
---

介绍一种利用 `constexpr` 实现编译时加密，运行时解密的方法。本文将介绍这一技术，并展示一个具体的实现示例。
::: tip 
逆向工程常通过执行文件的中静态字符串信息找到关键点函数进行逆向，编译时加密可以一定程度上避免这个问题。
:::

### 什么是 [`constexpr`](https://en.cppreference.com/w/cpp/language/constexpr)？

`constexpr` 是 C++11 引入的一个关键字，允许我们在编译时计算表达式的值。这意味着某些计算可以在编译时完成，从而提高运行时性能。在我们的例子中，我们使用 `constexpr` 实现编译时加密。

### 编译时加密与运行时解密的工作原理

我们通过定义一个 `constexpr` 函数来实现字符的加密和解密。然后，使用模板类在编译时对字符串进行加密，并在运行时对其进行解密。这样，敏感信息在编译时就被加密，从而不会以明文形式出现在可执行文件中。

### 实现示例

以下是一个完整的实现[示例](https://godbolt.org/z/7rdExbxbh)：
```cpp
#include <iostream>

// 用于字符加密和解密的constexpr函数
constexpr char xor_character(char c, unsigned key) {
    return c ^ key;
}

// 模板类用于编译时加密和运行时解密
template<unsigned SIZE>
class EncryptString {
public:
    // 构造函数在编译时对字符串进行加密
    constexpr EncryptString(const char* raw_str) {
        for(unsigned i = 0; i < SIZE - 1; ++i) {
            m_data[i] = xor_character(raw_str[i], i);
        }
        m_data[SIZE - 1] = 0; // 添加字符串结束符
    }

    // 解密函数在运行时对字符串进行解密
    char* decrypt() const {
        unsigned i = 0;
        for(; i < SIZE-1; ++i) {
            m_data[i] = xor_character(m_data[i], i);
        }
        m_data[SIZE-1] = 0; // 添加字符串结束符
        return m_data;
    }

private:
 mutable char m_data[SIZE]={'\0'};
};

// 宏定义用于简化加密字符串的使用
#define PROTECTED_STR(str) []{ \
    constexpr EncryptString<sizeof(str)> e(str);\
    std::cout <<  e.decrypt() <<  std::endl;\
}()

int main() {
    PROTECTED_STR("heng");//编译后的执行文件中不存在‘heng’ 关键字符串信息
    // std::cout <<  "heng" <<  std::endl;// 编译后的执行文件包含有 ‘heng’ 关键字符串信息，提供逆袭的信息点
    return 0;
}
```

### 代码详解

1. **`xor_character` 函数**:
   - 使用 XOR 操作对字符进行加密和解密。密钥是字符的位置索引。

2. **`EncryptString` 类**:
   - 模板类，用于在编译时加密字符串。
   - 构造函数通过 `xor_character` 函数对输入字符串进行加密，并存储在 `m_data` 数组中。
   - `decrypt` 函数在运行时对字符串进行解密。

3. **`PROTECTED_STR` 宏**:
   - 利用 lambda 表达式和 `constexpr` 特性，简化加密字符串的使用。
   - 在运行时对加密的字符串进行解密并返回。

4. **`main` 函数**:
   - 演示如何使用 `PROTECTED_STR` 宏来加密和解密字符串，并将解密后的字符串输出。


利用 `constexpr` 实现编译时加密和运行时解密是一种有效保护敏感信息的方法。本文展示了该技术的一个具体实现示例，并详细解释了其工作原理。通过这种方式，可以提高应用程序的安全性，避免给逆向提供敏感信息点。

