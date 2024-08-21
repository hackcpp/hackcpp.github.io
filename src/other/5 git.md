---
title: git 常用命令
order: 2
category:
  - 其他
tag:
  - git
editLink: false
---

Git 是最常用的版本控制工具之一，广泛用于开发和项目管理中。以下是一些常用的 Git 命令及其详细说明：

## 常用 Git 命令及其说明

### repository 操作 

1. **git init**
- **作用**：本地初始化一个新的 Git 仓库。
- **用法**：在一个空目录中运行 `git init`，Git 会创建一个 `.git` 目录，用于存储仓库的元数据。
  
```bash
  git init
```

2. **git clone**
- **作用**：从远程仓库克隆一个仓库到本地。
- **用法**：`git clone` 后跟仓库 URL，可以将远程仓库复制到本地。

```bash
  git clone https://github.com/user/repository.git
```

3. **git remote**
- **作用**：管理远程仓库地址。
- **用法**：
  - 查看当前的远程仓库：`git remote -v`
  - 添加新的远程仓库：`git remote add origin https://github.com/user/repo.git`
  - 删除远程仓库：`git remote remove origin`

  ```bash
  git remote -v  # 查看远程仓库
  git remote add origin https://github.com/user/repo.git  # 添加远程仓库
  ```

## 修改管理

### 1. **git add**
- **作用**：将文件添加到暂存区（stage），为下次提交做准备。
- **用法**：`git add` 后跟文件路径，或使用 `.` 添加当前目录下的所有更改。

  ```bash
  git add file.txt
  git add .
  ```

### 2. **git commit**
- **作用**：提交暂存区的更改，生成新的提交。
- **用法**：`git commit` 通常跟 `-m` 选项来添加提交信息，描述本次提交的内容。

  ```bash
  git commit -m "Add new feature"
  ```
- **修改commit信息**： 使用 `--amend` 修改最后一次提交的信息或内容。
  
  ```bash
  git commit --amend -m "Corrected commit message"
  ```
- **多次提交合并**：使用 `rebase` 合并最近几次的commit。
  
  ```bash
  git rebase -i HEAD～n
  ```

### 3. **git status**
- **作用**：显示工作目录和暂存区的状态，查看哪些文件有更改、哪些文件被暂存、哪些文件未被跟踪。
- **用法**：运行 `git status` 可以看到当前分支的状态信息。

  ```bash
  git status
  ```

### 4. **git log**
- **作用**：显示仓库的提交历史记录。
- **用法**：`git log` 列出当前分支的所有提交。你可以使用 `--oneline` 选项简化输出，或者 `--graph` 查看分支图形。

  ```bash
  git log
  git log --oneline
  git log --graph --oneline
  ```

### 5. **git diff**
- **作用**：查看工作目录、暂存区和最新提交之间的差异。
- **用法**：`git diff` 显示未暂存的更改，`git diff --staged` 显示已暂存但未提交的更改。

  ```bash
  git diff
  git diff --staged
  ```

### 6. **git checkout**
- **作用**：恢复工作目录中文件的状态。
- **用法**：`git checkout --` 后跟文件。

```bash
  git checkout feature-branch
  git checkout -- file.txt  # 恢复文件
```
### 7. **git stash**
- **作用**：保存当前工作目录的更改，以便稍后恢复，而不影响当前的代码提交历史。
- **用法**：`git stash` 可以在不提交代码的情况下保存未完成的工作。

  ```bash
  git stash
  git stash pop  # 恢复工作
  ```

### 8. **git reset**
- **作用**：重置当前分支的提交历史或工作目录状态，回退到之前的某个提交点。
- **用法**：
  - `git reset --soft`：保留工作区文件，只回退提交。
  - `git reset --hard`：丢弃工作区文件和提交历史。

  ```bash
  git reset --soft HEAD~1  # 回退一提交，但保留工作目录更改
  git reset --hard HEAD~1  # 丢弃更改
  ```

## 分支管理

### 1. **git checkout**
- **作用**：切换分支。
- **用法**：`git checkout` 后跟分支名称，切换到指定分支

  ```bash
  git checkout feature-branch 
  git checkout -b feature-branch #创建并切换分支
  ```

### 2. **git branch**
- **作用**：管理分支。列出、创建或删除分支。
- **用法**：
  - 列出分支：`git branch`
  - 创建新分支：`git branch branch_name`
  - 删除分支：`git branch -d branch_name`

  ```bash
  git branch  # 列出所有分支
  git branch feature-branch  # 创建新分支
  git branch -d feature-branch  # 删除分支
  ```

### 3. **git merge**
- **作用**：合并分支，将指定分支的更改合并到当前分支。
- **用法**：`git merge` 后跟要合并的分支名称。

  ```bash
  git merge feature-branch
  ```

### 4. **git rebase**
- **作用**：将当前分支的更改应用到另一分支的顶端，从而保持线性历史。
- **用法**：`git rebase` 可以让你的提交历史保持整洁。

  ```bash
  git rebase main
  ```

## 数据同步

### 1. **git pull**
- **作用**：从远程仓库拉取更改并合并到本地分支。相当于 `git fetch` 加 `git merge`。
- **用法**：`git pull` 默认从当前跟踪的远程分支拉取更新。

```bash
  git pull origin main
```

### 2. **git push**
- **作用**：将本地分支的提交推送到远程仓库。
- **用法**：`git push` 将更改推送到远程分支。

  ```bash
  git push origin main
  ```

### 3. **git fetch**
- **作用**：从远程仓库获取最新的提交和分支信息，但不合并到本地分支。
- **用法**：`git fetch` 会下载远程仓库的所有更改，但不会自动合并。

```bash
  git fetch origin
```

## 管理 Submodule
Git Submodule 是一个非常有用的功能，允许你在一个 Git 仓库中包含另一个独立的 Git 仓库。这对于需要将多个项目组合在一起的场景非常实用，例如一个大型项目包含多个子模块。以下是常见的 Git Submodule 操作和使用场景的详细介绍。

### 1. **添加 Submodule**
- **作用**：在你的项目中添加一个子模块，它指向另一个 Git 仓库。
- **命令**：

  ```bash
  git submodule add <repository_url> <path>
  ```

  示例：

  ```bash
  git submodule add https://github.com/example/repo.git libs/repo
  ```

  这会将 `repo` 仓库克隆到当前项目的 `libs/repo` 目录，并将其作为子模块添加。

### 2. **初始化和更新 Submodule**
- **初始化**：当你克隆包含子模块的仓库时，子模块不会自动被克隆。你需要先初始化它们：

  ```bash
  git submodule init
  ```

- **更新子模块**：初始化之后，使用以下命令克隆并更新子模块到最新提交：

  ```bash
  git submodule update
  ```

- **克隆仓库时自动初始化和更新子模块**：可以使用 `--recurse-submodules` 选项在克隆时自动初始化并更新所有子模块：

  ```bash
  git clone --recurse-submodules <repository_url>
  ```

### 3. **查看 Submodule 状态**
- **作用**：显示当前仓库中所有子模块的状态，例如子模块当前指向的 commit。
- **命令**：

  ```bash
  git submodule status
  ```

  输出中会显示子模块的哈希、路径以及子模块是否是最新的。

### 4. **更新 Submodule 到最新版本**
- **作用**：如果子模块的上游仓库有新的提交，你可以将子模块更新到最新版本。
- **命令**：

  进入子模块目录，然后拉取最新的更改：

  ```bash
  cd libs/repo
  git pull origin main
  ```

  回到主项目后，提交子模块的更新：

  ```bash
  git add libs/repo
  git commit -m "Update submodule"
  ```

### 5. **删除 Submodule**
- **作用**：从项目中移除子模块。
- **步骤**：

  1. **删除子模块的条目**：从 `.gitmodules` 文件中移除子模块条目。
  
  2. **删除子模块配置**：从 `.git/config` 文件中移除子模块的配置条目。
  
  3. **删除子模块目录**：手动删除子模块目录并从版本控制中移除：

     ```bash
     git rm -f libs/repo
     ```

  4. **提交更改**：

     ```bash
     git commit -m "Remove submodule"
     ```

### 6. **将 Submodule 更新到特定的 Commit**
- **作用**：在某些场景下，你可能希望子模块保持在特定的 commit，而不是跟随最新的更改。
- **命令**：

  进入子模块目录，检查出所需的 commit：

  ```bash
  cd libs/repo
  git checkout <commit_hash>
  ```

  回到主项目，添加并提交子模块的状态：

  ```bash
  git add libs/repo
  git commit -m "Update submodule to specific commit"
  ```

### 7. **嵌套 Submodule**
子模块本身也可以包含子模块，称为嵌套子模块。这些子模块的操作与普通子模块类似，但需要特别注意初始化和更新嵌套结构时可能出现的复杂性。

### 8. **处理 Submodule 的常见问题**
- **子模块指针未更新**：当你更新子模块后，可能会忘记将更新提交到主仓库。确保更新完子模块后，执行 `git add` 和 `git commit` 将指针的变化保存到主仓库。
- **子模块无法初始化或更新**：确保子模块的 URL 正确，并且你有相应的权限克隆子模块。

::: tip 总结
Git Submodule 是在大型项目或多仓库项目中非常有用的功能，可以让你更好地组织代码。通过上述命令，你可以轻松地添加、更新、管理和删除子模块。掌握这些操作将帮助你有效地管理项目依赖关系和模块化代码结构。
:::

