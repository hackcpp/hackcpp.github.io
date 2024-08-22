---
title: 梳理下在工作中使用到的设计模式
order: 2
category:
  - 其他
tag:
  - 设计模式
editLink: false
---

### 波形绘制中，用到了[**策略模式**](/design/3%20strategy_pattern)，模版方法
@startuml 类图
abstract class Wave {
+void draw(const drawOption& op) const
-void beginDraw(const drawOption& op) 
-void endDraw() 
#{abstract} virtual void doDraw(const drawOption& op) const
}
Wave <|... BitWave : 实现 
Wave <|... BusWave : 实现 

class BitWave {
#{abstract} virtual void doDraw(const drawOption& op) const override
}

class BusWave {
#{abstract} virtual void doDraw(const drawOption& op) const override
}

Cavas *--> WaveStyle : 拥有 
Cavas ... Wave : 依赖 

class Cavas {
  -WaveStyle* mWaveStyle
  +void drawWaves() const
  +void setWaveStyle(WaveStyle* style)
}

class WaveStyle {
+{abstract}void initDrawOption(drawOption& op) const
}

WaveStyle <|--  DarkWaveStyle : 实现
WaveStyle <|--  LightWaveStyle : 实现

class DarkWaveStyle {
  +void initDrawOption(drawOption& op) const override
}

class LightWaveStyle {
  +void initDrawOption(drawOption& op) const override
}
@enduml

```cpp

class Wave {
public:
    //模版方法，draw 的流程基本固定，但是某些步骤的细节部分由子类实现
    void draw(const DrawOption& op) {
        beginDraw(op);
        doDraw(op);// 具体绘制延后到子类实现
        endDraw();
    }
protected:    
   // 抽象方法, 具体的绘制由子类实现
    virtual  void doDraw(const DrawOption&) = 0;
private:
    void beginDraw(const drawOption& op) {
        // do something
    }
    void endDraw() {
    }
};

class BitWav : public Wave {
protected:
    void doDraw(const DrawOption& op) override {
        // draw bit wave
    }
};

class BusWav : public Wave {
protected:
    void doDraw(const DrawOption& op) override {
        // draw bus wave
    }
};

//策略模式, 将波形绘制配置的设置逻辑抽象出来，由子类实现具体绘制配置的设置逻辑
class WaveStyle {
    public:
    virtual void initDrawOption(DrawOption& op) const = 0;
};

class DarkWaveStyle : public WaveStyle {
    public:
     void initDrawOption(DrawOption& op) const override {
        //do something 用dark style 初始化op
     }
};
class LightWaveStyle : public WaveStyle {
    public:
    virtual void initDrawOption(DrawOption& op) const override {
         //do something light style 初始化op
    }
};

class Cavas {
public:
    void drawWaves() {
        auto waves = getwaves();
        //策略模式
        for (auto& wave : waves) {
           DrawOption op;// 绘制参数 color, width, ...
           //根据装载的mStyle 初始化op
           mstlye->initDrawOption(op);
           wave.draw(op);
        } 
    }
    void setWaveStyle(WaveStyle* style) {
        mStyle = style;
    }
    private:
    WaveStyle* mStyle = nullptr;
};
```

### 工厂方法模式 + 内存池 用于创建频繁的对象
```cpp
class Signal {
public:
    static Signal* create(const SignalOption& op) {
        // do something 从内存中申请一个对象，并初始化 
        void* mem = pool->malloc(sizeof(Signal));
        new (mem) Signal(op);
        return (Signal*)mem;
    }
};
class Scope {
public:
    static Scope* create(const ScopeOption& op) {
        // do something 从内存中申请一个对象，并初始化 
        void* mem = pool->malloc(sizeof(Scope));
        new (mem) Scope(op);
        return (Scope*)mem;
    }
};
```

### 利用[**观察者模式**](/design/3%20strategy_pattern)，实现preference 配置更改的更新
@startuml 类图
abstract class PreferenceObserver {
+{abstract} virtual void update(float value)
}
PreferenceObserver <|... MainForm : 实现 

Preference *--> PreferenceObserver : 拥有 

class MainForm {
    +void update(float value) override
}

class Preference {
  -PreferenceObserver* mObservers
  +void notifyObservers()
  +void addObserver(PreferenceObserver* progress)
}
@enduml

```cpp
class Preference {
public:
class PreferenceObserver {
public:
    virtual void update() = 0;
};

void setValue(float value) {
    if (mValue != value) {
        mValue = value;
        notifyObservers();
    }
}

void addObserver(PreferenceObserver* observer) {
        mObservers.push_back(observer);
}

void notifyObservers() {
    for (auto& observer : mObservers) {
        observer->update();
    }
 }
private:
    std::vector<PreferenceObserver*> mObservers;
    int mValue;
};
```

### 拨测任务执行中用到了[**桥接模式**](/design/5%20bridge_pattern)，将任务逻辑和浏览器实现进行分离

@startuml 类图
TaskManager ... Task : 依赖 
TaskManager ... Browser : 依赖 

abstract class Browser {
+{abstract} virtual void play() const
}
Browser <|... IEBrowser : 实现 
Browser <|... ChromeBrowser : 实现 

class IEBrowser {
+void play() const override
}

class ChromeBrowser {
+void play() const override
}

Task *--> Browser : 拥有 

abstract class Task {
-Browser* mBrowser
+void setBrowser(Browser* browser)
+{abstract} virtual void run() const
}

Task <|-- WebTask : 实现
Task <|-- VideoTask : 实现

class WebTask {
  +void run() const override
}

class VideoTask {
  +void run() const override
}

@enduml
```cpp
class Browser {
public:
    virtual void play(const Option& script) = 0;
};

class ChromeBrowser : public Browser {
public:
    void play(const Option& script) override {
        // do something
    }
};

class IEBrower : public Browser {
public:
    void play(const Option& script) override {
        // do something
    }
};

class Task {
public:
    void setBrowser(Browser* browser) {
        // do something
        mBrowser = browser;
    }
    virtual void run() = 0;
protected:
     Browser* mBrowser = nullptr;
};

class WebTask : public Task {
public:
    void run() override {
        // do something
        auto script = getScript();
        mBrower->play(script);
        // do something 数据处理
    }
};

class VideoTask : public Task {
public:
    void run() override {
        // do something
        auto url = getVideoURL();
        mBrower->play(url);
        // do something 数据处理
    }
};

class TaskManager {
public:
    void runTasks() {
        //根据配置 task 装载不同 browser 做具体的浏览操作
        //桥接模式： 分离任务逻辑和执行实现
        for (auto& task : mTaskList) {
            if (useIE) {
                task->setBrower(new IEBrowser);
            }
            else {
                task->setBrower(new Chrome);
            }
            task->run();
        }
    }
private:
    std::vector<Task*> mTaskList;
};
```