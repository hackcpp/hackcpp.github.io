---
title: mysql 的基本使用
order: 2
category:
  - 其他
tag:
  - mysql
  - sql
editLink: false
---

MySQL 是一个广泛使用的关系型数据库管理系统 (RDBMS)，可以用来存储和管理数据。它使用 SQL（结构化查询语言）来进行数据操作。MySQL 主要操作分为三个层次：数据库操作、表操作和数据行操作。以下是对每个层次的详细介绍和常用命令的解释。

---

## **数据库(database)操作**

数据库是 MySQL 中用于存储表和其他数据库对象的逻辑容器。以下是与数据库相关的基本操作：

### **创建数据库**
使用 `CREATE DATABASE` 命令创建一个新的数据库。
```sql
CREATE DATABASE database_name;
```
示例：
```sql
CREATE DATABASE my_database;
```

### **查看数据库**
可以使用 `SHOW DATABASES` 来查看 MySQL 服务器上现有的所有数据库。
```sql
SHOW DATABASES;
```

### **选择数据库**
在执行与某个数据库相关的操作之前，需要使用 `USE` 命令选择该数据库。
```sql
USE database_name;
```
示例：
```sql
USE my_database;
```

### **删除数据库**
使用 `DROP DATABASE` 删除一个现有的数据库。这将删除数据库及其所有数据，因此需要谨慎操作。
```sql
DROP DATABASE database_name;
```
示例：
```sql
DROP DATABASE my_database;
```

---

##  **数据表(table)操作**

表是数据库中的核心对象，它包含行和列，用于存储结构化数据。以下是与表操作相关的基本命令：

### **创建表**
使用 `CREATE TABLE` 命令来创建一个新表。表由列定义，每列有特定的数据类型。
```sql
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    ...
);
```
示例：
```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### **查看表结构**
使用 `DESCRIBE` 或 `SHOW COLUMNS` 命令查看表的列结构。
```sql
DESCRIBE table_name;
```
或
```sql
SHOW COLUMNS FROM table_name;
```
示例：
```sql
DESCRIBE users;
```

### **查看表内容**
使用 `SELECT` 语句可以查询表中的数据。
```sql
SELECT * FROM table_name;
```
示例：
```sql
SELECT * FROM users;
```

###  **修改表**
使用 `ALTER TABLE` 命令可以修改现有表的结构，包括添加、删除或修改列。
- **添加列**：
   ```sql
   ALTER TABLE table_name ADD column_name datatype;
   ```
   示例：
   ```sql
   ALTER TABLE users ADD age INT;
   ```
- **修改列**：
   ```sql
   ALTER TABLE table_name MODIFY column_name datatype;
   ```
   示例：
   ```sql
   ALTER TABLE users MODIFY age SMALLINT;
   ```
- **删除列**：
   ```sql
   ALTER TABLE table_name DROP COLUMN column_name;
   ```
   示例：
   ```sql
   ALTER TABLE users DROP COLUMN age;
   ```

### **重命名表**
使用 `RENAME TABLE` 来重命名一个现有的表。
```sql
RENAME TABLE old_table_name TO new_table_name;
```
示例：
```sql
RENAME TABLE users TO customers;
```

### **删除表**
使用 `DROP TABLE` 删除表。此操作会删除表和表中的所有数据。
```sql
DROP TABLE table_name;
```
示例：
```sql
DROP TABLE users;
```

---

## **数据行操作**

数据行是表中实际存储的数据记录。以下是与数据行相关的常用操作：

### **插入数据**
使用 `INSERT INTO` 命令将一行或多行数据插入表中。
```sql
INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);
```
示例：
```sql
INSERT INTO users (username, email) VALUES ('john_doe', 'john@example.com');
```

一次性插入多行：
```sql
INSERT INTO users (username, email) VALUES 
('alice', 'alice@example.com'),
('bob', 'bob@example.com');
```

### **更新数据**
使用 `UPDATE` 命令修改表中的现有记录。通常需要指定条件以避免更新所有行。
```sql
UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;
```
示例：
```sql
UPDATE users SET email = 'new_email@example.com' WHERE id = 1;
```

### **删除数据**
使用 `DELETE` 命令删除表中的记录。同样需要注意指定条件，以避免删除所有行。
```sql
DELETE FROM table_name WHERE condition;
```
示例：
```sql
DELETE FROM users WHERE id = 1;
```

- **删除所有数据**（不推荐使用，不加条件会删除所有记录）：
   ```sql
   DELETE FROM users;
   ```
### **查询数据**

数据查询操作是数据库管理和应用开发中的核心任务之一。不同场景下的数据查询需求多种多样，涉及从简单的记录提取到复杂的多表关联。以下是对各种场景下数据查询操作的详细介绍，包括基础查询、条件查询、排序、分组、聚合、联接查询、子查询、联合查询等。

---

#### **基础查询操作**

基础查询是从数据库表中提取数据的最基本方式，通常使用 `SELECT` 语句。

**示例**：
```sql
SELECT column1, column2 FROM table_name;
```

- **查询所有列**：
   ```sql
   SELECT * FROM users;
   ```
   这将返回表 `users` 中的所有列和记录。

- **查询特定列**：
   ```sql
   SELECT username, email FROM users;
   ```
   只返回 `username` 和 `email` 列的值。

####  **条件查询**

条件查询用于根据特定条件筛选数据。使用 `WHERE` 子句可以指定条件。

**示例**：
```sql
SELECT * FROM users WHERE age > 18;
```
- **常见条件操作符**：
   - 等于 (`=`)： `age = 25`
   - 不等于 (`<>` 或 `!=`)： `age <> 25`
   - 大于 (`>`)、小于 (`<`)、大于等于 (`>=`)、小于等于 (`<=`)
   - 匹配模式 (`LIKE`)： `email LIKE '%@example.com'`
   - 范围 (`BETWEEN`)： `age BETWEEN 20 AND 30`
   - 列表 (`IN`)： `id IN (1, 2, 3)`
   - 空值检查 (`IS NULL` 和 `IS NOT NULL`)： `email IS NOT NULL`

####  **排序查询**

使用 `ORDER BY` 子句对查询结果进行排序，默认按升序排序。可以指定升序 (`ASC`) 或降序 (`DESC`)。

**示例**：
```sql
SELECT * FROM users ORDER BY created_at DESC;
```
- 按 `created_at` 列进行降序排序，最近创建的用户将排在最前面。

#### **分组查询**

分组查询用于将数据按照某一列或多列的值分组，通常与聚合函数一起使用。使用 `GROUP BY` 子句进行分组。

**示例**：
```sql
SELECT department, COUNT(*) as employee_count FROM employees GROUP BY department;
```
- 统计每个部门的员工数量。

- **HAVING 子句**：用于对分组后的数据进行筛选。
   ```sql
   SELECT department, COUNT(*) as employee_count 
   FROM employees 
   GROUP BY department 
   HAVING employee_count > 10;
   ```

#### **聚合查询**

聚合查询用于对一组数据进行计算，返回单一值。常用的聚合函数包括：
- `COUNT()`：计算行数
- `SUM()`：求和
- `AVG()`：求平均值
- `MIN()`：求最小值
- `MAX()`：求最大值

**示例**：
```sql
SELECT AVG(salary) FROM employees;
```
- 返回员工工资的平均值。

- **带条件的聚合查询**：
   ```sql
   SELECT department, MAX(salary) as max_salary 
   FROM employees 
   WHERE age > 30 
   GROUP BY department;
   ```

#### **联接查询**

联接（JOIN）查询用于从多个表中同时提取数据，根据某些列之间的关系将表连接在一起。常见的联接类型包括：

- **内联接 (INNER JOIN)**
只返回两个表中匹配的行。
```sql
SELECT users.username, orders.order_id 
FROM users 
INNER JOIN orders ON users.id = orders.user_id;
```

- **左联接 (LEFT JOIN)**
返回左表中的所有行，即使右表中没有匹配的行。
```sql
SELECT users.username, orders.order_id 
FROM users 
LEFT JOIN orders ON users.id = orders.user_id;
```

- **右联接 (RIGHT JOIN)**
返回右表中的所有行，即使左表中没有匹配的行。
```sql
SELECT users.username, orders.order_id 
FROM users 
RIGHT JOIN orders ON users.id = orders.user_id;
```

- **全联接 (FULL JOIN)**
返回两个表中所有的行，只要其中一张表中有匹配的行。MySQL 不支持 `FULL JOIN`，通常通过 `UNION` 实现。
```sql
SELECT users.username, orders.order_id 
FROM users 
LEFT JOIN orders ON users.id = orders.user_id
UNION
SELECT users.username, orders.order_id 
FROM users 
RIGHT JOIN orders ON users.id = orders.user_id;
```

#### **子查询**

子查询是嵌套在另一个查询中的查询，通常用于在主查询中使用子查询结果。子查询可以出现在 `SELECT`、`FROM`、`WHERE` 或 `HAVING` 子句中。

**示例**：
```sql
SELECT username FROM users WHERE id = (SELECT user_id FROM orders WHERE order_id = 1);
```
- 查找下订单 `order_id = 1` 的用户名。

#### **EXISTS 子查询**
使用 `EXISTS` 关键字检查子查询是否返回结果。
```sql
SELECT username 
FROM users 
WHERE EXISTS (SELECT 1 FROM orders WHERE users.id = orders.user_id);
```
- 返回所有至少有一个订单的用户。

#### **联合查询**

联合查询将多个 `SELECT` 语句的结果合并到一个结果集中。使用 `UNION` 操作符时，默认会去除重复行；使用 `UNION ALL` 可以保留所有行。

**示例**：
```sql
SELECT username, email FROM users
UNION
SELECT customer_name as username, customer_email as email FROM customers;
```
- 将 `users` 和 `customers` 两个表的数据合并输出。

#### **分页查询**

分页查询用于获取大数据集中的一部分记录，通常与 `LIMIT` 和 `OFFSET` 子句结合使用。

**示例**：
```sql
SELECT * FROM users LIMIT 10 OFFSET 20;
```
- 获取从第 21 行开始的 10 条记录。

####  **复杂查询组合**

复杂查询场景可能涉及多种查询操作的组合，例如在子查询中使用联接，或结合聚合、分组和条件查询。复杂查询往往用于解决特定业务需求，以下是一个综合示例：

**示例**：
```sql
SELECT department, COUNT(*) as employee_count, AVG(salary) as avg_salary
FROM employees
WHERE department IN (SELECT department FROM departments WHERE location = 'New York')
GROUP BY department
HAVING AVG(salary) > 50000
ORDER BY employee_count DESC
LIMIT 5;
```
- 查询位于纽约的部门中，员工平均工资大于 50000 的前 5 个部门，并按员工数量降序排序。

---

::: tip 总结
- **基础查询**：使用 `SELECT` 提取数据。
- **条件查询**：通过 `WHERE` 过滤数据。
- **排序查询**：使用 `ORDER BY` 对结果排序。
- **分组查询**：使用 `GROUP BY` 按特定列分组，常与聚合函数结合使用。
- **聚合查询**：使用 `COUNT`、`SUM`、`AVG` 等函数进行统计。
- **联接查询**：通过 `JOIN` 从多个表中提取关联数据。
- **子查询**：在一个查询中嵌套另一个查询。
- **联合查询**：通过 `UNION` 合并多个 `SELECT` 结果集。
- **分页查询**：使用 `LIMIT` 和 `OFFSET` 实现分页。
:::


## 总结
- **数据库操作**：创建、选择、查看和删除数据库。
- **表操作**：创建、修改、查看和删除表，以及重命名表。
- **数据行操作**：插入、查询、更新和删除表中的数据行，以及对数据进行统计。