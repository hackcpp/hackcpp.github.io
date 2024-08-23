---
title: cmake 基本使用
order: 2
category:
  - 工具
tag:
  - cmake
editLink: false
---

CMake 是一个跨平台的构建系统生成工具，广泛用于 C/C++ 项目的构建管理。它可以生成适用于不同编译器和操作系统的构建系统文件，如 Makefile、Ninja 文件或 Visual Studio 工程文件。以下是 CMake 的基本教程，帮助你快速上手。

###  **安装 CMake**
CMake 支持多平台，以下是不同系统的安装方式：
- **Ubuntu/Debian**：
  ```bash
  sudo apt-get install cmake
  ```
- **macOS**（使用 Homebrew）：
  ```bash
  brew install cmake
  ```
- **Windows**：
  通过 [CMake 官方网站](https://cmake.org/download/) 下载安装程序。

###  **CMake 基本概念**
- **CMakeLists.txt**：CMake 的核心文件，包含构建系统的配置和构建指令。每个 CMake 项目都至少需要一个 `CMakeLists.txt` 文件。
- **生成器**：CMake 可以为不同平台生成相应的构建系统，如 Makefiles、Ninja 文件或 Visual Studio 项目文件。
- **构建目录**：通常，CMake 项目采用 "out-of-source" 构建，即构建文件和源文件分离。

###  **CMakeLists.txt 的基本结构**
一个简单的 `CMakeLists.txt` 文件通常包含以下内容：

```cmake
# 声明最低 CMake 版本要求
cmake_minimum_required(VERSION 3.10)

# 定义项目名称和语言
project(HelloWorld VERSION 1.0 LANGUAGES C CXX)

# 添加可执行文件
add_executable(hello main.cpp)
```

- `cmake_minimum_required()`：指定最低 CMake 版本。
- `project()`：定义项目的名称和版本信息。
- `add_executable()`：定义一个可执行文件，并指定源文件。

###  **编写简单的 CMake 项目**
####  项目结构
创建一个简单的项目结构：

```plaintext
my_project/
├── CMakeLists.txt
└── main.cpp
```

####  `main.cpp` 示例
在 `main.cpp` 中编写简单的 C++ 代码：

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

####  `CMakeLists.txt` 示例
创建一个最简单的 `CMakeLists.txt` 文件，如下所示：

```cmake
cmake_minimum_required(VERSION 3.10)
project(HelloWorld)

add_executable(hello main.cpp)
```

###  **生成并构建项目**
#### 5.1 创建构建目录
推荐使用 "out-of-source" 构建，将所有构建文件放到单独的目录中：

```bash
mkdir build
cd build
```

#### 5.2 运行 CMake 命令
在构建目录中运行 CMake：

```bash
cmake ..
```

这会生成一个适合当前平台的构建系统文件（如 `Makefile` 或 Visual Studio 项目）。

#### 5.3 构建项目
生成构建文件后，可以使用生成的构建系统工具进行编译：

- **Makefile 构建**：
  ```bash
  make
  ```

- **Ninja 构建**（如果使用 Ninja 生成器）：
  ```bash
  ninja
  ```

生成的可执行文件将位于构建目录中，你可以运行它：

```bash
./hello
```

###  **常用 CMake 命令**
- **设置变量**：
  ```cmake
  set(MY_VARIABLE "value")
  ```
  使用 `${MY_VARIABLE}` 访问变量。

- **添加库**：
  你可以使用 `add_library()` 添加静态或动态库：
  ```cmake
  add_library(my_library STATIC src/mylib.cpp)
  ```

- **包含目录**：
  使用 `include_directories()` 将目录添加到编译器的包含路径中：
  ```cmake
  include_directories(include/)
  ```

- **链接库**：
  使用 `target_link_libraries()` 为目标（如可执行文件或库）添加依赖库：
  ```cmake
  target_link_libraries(hello my_library)
  ```

### **查找包和依赖项**
CMake 提供了 `find_package()` 函数，用于查找系统中已安装的库。例如，查找并使用 Boost 库：

```cmake
find_package(Boost REQUIRED)
include_directories(${Boost_INCLUDE_DIRS})
target_link_libraries(hello ${Boost_LIBRARIES})
```

### **自定义编译选项**
通过 `target_compile_options()` 为编译器指定自定义编译选项：

```cmake
target_compile_options(hello PRIVATE -Wall -Wextra)
```

### **安装目标**
CMake 还支持安装可执行文件和库。你可以使用 `install()` 函数：

```cmake
install(TARGETS hello DESTINATION bin)
```

### **常见生成器**
- **Unix Makefiles**：适用于大多数 Linux/Unix 系统，默认生成 `Makefile`。
- **Ninja**：适用于快速构建，可以通过 `-G Ninja` 选项指定生成器。
- **Visual Studio**：适用于 Windows，生成 Visual Studio 项目文件。

::: tip  总结
CMake 是一个非常灵活和强大的构建工具，适合处理复杂的跨平台项目。通过以上基本操作和命令，你可以快速上手并使用 CMake 管理你的 C/C++ 项目。在此基础上，CMake 还支持很多高级功能，如测试、打包等，推荐深入学习并灵活运用。
:::

### 参考
[cmake 文档](https://cmake.org/cmake/help/latest/manual/cmake-buildsystem.7.html#introduction)