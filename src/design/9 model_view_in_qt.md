---
title: Model-View 框架
order: 2
category:
  - 架构设计
tag:
  - 设计模式
  - Model-View
  - Qt
editLink: false
---

Qt 的 Model-View 框架是一种用于处理和显示数据的灵活机制，特别适合需要在用户界面中展示大量或复杂数据的应用程序。通过将数据和显示逻辑解耦，Model-View 框架提供了更高的灵活性和可维护性。Qt 的 Model-View 框架包含三个主要组件：Model（模型）、View（视图）和 Delegate（委托）。

### Model-View 框架的核心概念

#### Model（模型）

Model 是数据的抽象表示，负责存储和管理数据，并向 View 提供访问这些数据的接口。Model 不直接与 UI 打交道，而是通过信号和槽机制通知 View 数据的变化。Qt 提供了几个现成的模型类，如 `QStandardItemModel` 和 `QStringListModel`，开发者也可以通过继承 `QAbstractItemModel`、`QAbstractTableModel` 或 `QAbstractListModel` 来自定义模型。

**Model 的主要职责**：
- **管理数据**：模型负责存储和管理数据，包括对数据的增删改查操作。
- **提供接口**：模型通过标准化的接口提供数据给 View。
- **通知数据变更**：模型会在数据发生变化时发出信号，通知 View 更新显示。

Qt 中常用的 Model 类：
- **QAbstractItemModel**：所有自定义模型的基类，适合树状结构数据。
- **QAbstractListModel**：用于一维列表数据的基类。
- **QAbstractTableModel**：用于二维表格数据的基类。
- **QStandardItemModel**：提供标准的项目模型，实现了表格和树状结构的支持。

**示例**：使用 `QStandardItemModel` 来存储和操作数据。
```cpp
QStandardItemModel *model = new QStandardItemModel();
model->setHorizontalHeaderLabels({"Name", "Age"});

QStandardItem *item1 = new QStandardItem("John");
QStandardItem *item2 = new QStandardItem("25");

model->appendRow({item1, item2});
```

#### View（视图）

View 负责展示数据，是用户与数据进行交互的界面部分。View 通过访问 Model 提供的数据，并将这些数据渲染到屏幕上。常用的视图类包括 `QListView`、`QTableView` 和 `QTreeView`，它们分别用于显示列表、表格和树形数据。

**View 的主要职责**：
- **显示数据**：View 从 Model 中获取数据并进行显示。
- **用户交互**：View 处理用户的输入，如点击、编辑等。
- **数据同步**：View 会自动更新显示，确保与 Model 数据保持一致。

Qt 中常用的 View 类：
- **QListView**：用于显示列表数据。
- **QTableView**：用于显示表格数据。
- **QTreeView**：用于显示树形结构数据。

**示例**：使用 `QTableView` 显示 `QStandardItemModel` 的数据。
```cpp
QTableView *view = new QTableView();
view->setModel(model);
view->show();
```

#### Delegate（委托）

Delegate 是 View 和 Model 之间的中介，用于定制数据的显示和编辑。通过委托，开发者可以控制单元格的外观和编辑方式。Qt 默认的委托类是 `QStyledItemDelegate`，你可以继承这个类来自定义数据的显示和编辑行为。

**Delegate 的主要职责**：
- **渲染数据**：委托负责将 Model 中的数据渲染为可视化的控件或元素。
- **编辑数据**：委托还负责处理数据的编辑，提供自定义的编辑控件和逻辑。

**示例**：自定义委托，通过 `QStyledItemDelegate` 渲染数据。
```cpp
class CustomDelegate : public QStyledItemDelegate {
    Q_OBJECT

public:
    CustomDelegate(QObject *parent = nullptr) : QStyledItemDelegate(parent) {}

    void paint(QPainter *painter, const QStyleOptionViewItem &option, const QModelIndex &index) const override {
        painter->save();
        // 自定义绘制逻辑
        painter->drawText(option.rect, Qt::AlignCenter, index.data().toString());
        painter->restore();
    }
};

// 在视图中使用自定义委托
view->setItemDelegate(new CustomDelegate());
```

### Model-View 的数据流

Model-View 模式的关键在于数据与 UI 的分离，数据流的方向如下：
1. **View 获取数据**：View 通过 `setModel()` 设置模型，并通过模型的标准接口（如 `data()`、`rowCount()`、`columnCount()`）获取数据并显示在界面上。
2. **用户交互**：用户在 View 中进行操作（如点击、编辑），这些操作会通过委托发送到 Model，Model 根据操作更新数据。
3. **Model 通知 View**：当 Model 数据发生变化时，Model 通过信号通知 View，View 自动刷新显示。

### 数据绑定与更新

在 Qt 的 Model-View 模式中，数据更新主要依赖于信号与槽机制。Model 通过 `dataChanged()` 等信号通知 View 数据已更改，View 会根据这些信号自动更新显示内容。常用的更新信号包括：
- **dataChanged()**：当模型中的某个数据项发生变化时发出。
- **layoutChanged()**：当模型的布局发生变化时发出，例如排序、筛选等操作。
- **rowsInserted()**、**rowsRemoved()**：当插入或删除行时发出。

###  Qt 中的 Model-View 与 MVC

Qt 的 Model-View 框架类似于传统的 MVC（Model-View-Controller）模式，但它没有显式的 Controller。Qt 的设计将 Controller 的职责分散到 View 和 Delegate 中：
- **View**：负责展示数据，并处理用户交互。
- **Delegate**：负责处理数据的呈现和编辑。

通过这种设计，Qt 的 Model-View 框架能够更加灵活地支持各种数据展示场景，开发者可以更自由地定制数据的显示和交互行为。

### 自定义模型

虽然 Qt 提供了多种现成的模型类，但在实际应用中，经常需要创建自定义模型，以适应复杂的数据结构和特定的业务需求。自定义模型需要继承 `QAbstractItemModel`、`QAbstractTableModel` 或 `QAbstractListModel`，并实现相关的接口方法。

**常见需要实现的方法**：
- **rowCount()**：返回模型的行数。
- **columnCount()**：返回模型的列数。
- **data()**：返回指定索引处的数据。
- **setData()**：用于修改指定索引处的数据。
- **headerData()**：返回模型的表头数据。

**示例**：自定义一个简单的表格模型。
```cpp
class CustomTableModel : public QAbstractTableModel {
    Q_OBJECT

public:
    CustomTableModel(QObject *parent = nullptr) : QAbstractTableModel(parent) {}

    int rowCount(const QModelIndex &parent = QModelIndex()) const override {
        return 5;  // 5 行
    }

    int columnCount(const QModelIndex &parent = QModelIndex()) const override {
        return 3;  // 3 列
    }

    QVariant data(const QModelIndex &index, int role = Qt::DisplayRole) const override {
        if (role == Qt::DisplayRole) {
            return QString("Row%1, Column%2").arg(index.row()).arg(index.column());
        }
        return QVariant();
    }
};
```

### 代理模型

Qt 提供了一些代理模型（Proxy Model）来对原始模型的数据进行转换或过滤。常用的代理模型有：
- **QSortFilterProxyModel**：用于对数据进行排序和过滤。
- **QIdentityProxyModel**：直接映射原始模型，适合做数据的装饰或修改。
  
使用代理模型可以在不修改原始模型的情况下，对数据进行排序、过滤或其他转换操作。

**示例**：使用 `QSortFilterProxyModel` 进行排序。
```cpp
QSortFilterProxyModel *proxyModel = new QSortFilterProxyModel();
proxyModel->setSourceModel(model);
proxyModel->sort(0, Qt::AscendingOrder);  // 对第 0 列进行升序排序

view->setModel(proxyModel);
```

::: tip 总结

Qt 的 Model-View 框架通过将数据和显示逻辑解耦，提供了更高的灵活性和可维护性。无论是使用现成的模型类，还是通过自定义模型，开发者都能够以更清晰的方式管理复杂的数据展示和用户交互。通过委托机制，Qt 允许开发者定制数据的显示和编辑，使得 UI 的表现力更强。而代理模型则进一步扩展了数据处理的能力，使得数据的排序、过滤等操作更加方便。
:::