---
title: git相关概念及命令
tags: ["git", "使用"]
categories: ["git", "概念及命令"]
---

# git的使用

- 概念
  - 仓库 
  - 数据如何存储
  - HEAD
  - 分支和tag
- 常用命令及原理
  - add
  - commit
  -  branch
  - checkout
  - merge
  - fetch  和 pull
  - reset 和 revert
  - tag
  - rabase
  - stash
- git flow
  - Git Flow常用的分支
  - 各个分支如何工作
  - 一些问题和解决方案

<!--more-->

# 概念

1. 仓库 
2. 数据如何存储
3. HEAD
4. 分支和tag

## **仓库**

- Directory：使用Git管理的一个目录，也就是一个仓库，包含我们的工作空间和Git的管理空间。

- WorkSpace：需要通过Git进行版本控制的目录和文件，这些目录和文件组成了工作空间，除了.git之外的都属于工作区。

- .git：存放Git管理信息的目录，初始化仓库的时候自动创建。

- Index/Stage：暂存区，或者叫待提交更新区，在提交进入repo之前，我们可以把所有的更新放在暂存区。

- Local Repo：本地仓库，一个存放在本地的版本库；HEAD会只是当前的开发分支（branch）。

- Stash：是一个工作状态保存栈，用于保存/恢复WorkSpace中的临时状态。可以把当前工作现场“保存”起来，等以后恢复现场后继续工作。（工作流被打断，需要先做别的需求）

  ![](https://images2015.cnblogs.com/blog/1048430/201610/1048430-20161025094251906-2007066023.png)

当我们在工作区域完成了文件的添加修改删除等，操作之后，可以通过add命令将更改后的文件保存到暂存区，再通过commit命令将暂存区的文件提交到本地仓库。

## 数据存储

 [“Git 保存的不是文件的变化或者差异，而是一系列不同时刻的 **快照** 。 ” ](https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%AE%80%E4%BB%8B)  ——git官方文档

有些版本管理工具是保存每个版本之间的变化，这样虽然总文件体积小，但是每检出一个文件都要从最开始的版本一个个修改叠加上去，很慢。 

**那么如何理解快照？**

快照就是整个文件。

但是在文件系统的层面上，这些快照会进行一个压缩，既新文件中会继续使用与旧文件内容相同部分的磁盘空间，不同部分则写入新的磁盘空间。 

**如果每一次的更改都保存整个文件，那么项目的体积会变得越来越大，git如何处理？**

git有一个git gc的打包指令，功能为打包之前变动的文件，会保存当前最新版本的整个文件，之前的版本只保存diff（因为最新版本用得多）。这个指令可以主动触发，也可以在git push，或者变动文件过多的时候自动触发。 

**git 的数据存储数据结构是键值类型，git中底层生成了4中数据的对象**

- commit：commit 对象指向一个 tree 对象，并且带有相关的描述信息.
- tree: 可以看作一个目录，其中保存了本次提交修改了的文件，和对上一次提交的索引。
- blob: 通常用来存储文件的内容
- tag：tag 对象包括一个对象名(SHA1签名)、对象类型、标签名、标签创建人的名字(“tagger”), 还有一条可能包含有签名(signature)的消息

![](https://img2020.cnblogs.com/blog/625864/202005/625864-20200504201122396-1660659811.png)

## HEAD

一个特殊的指针，指向当前的分支。

## 分支和tag

**分支**

什么是分支？

Git 的分支，其实本质上仅仅是指向提交对象的可变指针。 Git 的默认分支名字是 `master`。 分支会在每次的提交之后向前移动，指向最新的提交对象。

不同分支的提交如何区分？

如图，我们切换到testing分支，并进行了一次提交，这样testing分支就向前移动了，而master分支没有。如果这是我们又切换回master分支并进行一次提交，那么master也会向前移动，不过它们指向的提交对象就不同了。



![](https://git-scm.com/book/en/v2/images/head-to-testing.png)

![HEAD 分支随着提交操作自动向前移动。](https://git-scm.com/book/en/v2/images/advance-testing.png) 

**tag**

Git 可以给仓库历史中的某一个提交打上标签，以示重要。 

一般用这个功能来标记发布的结点（v1.0  v2.0）

使用场景：

- 发布版本 
- 重大修改 
- 重大升级

### 常用命令及原理

**add **   将修改了的文件提交到暂存区

```sh
# 添加某些文件
git add <fileName>  <feileName>
# 添加某目录下的文件
git add folder1/. folder2/.
# 添加所有修改了的文件（不包括删除）
git add .
# 添加修改的文件和删除添加到暂存区，不包括新文件
git add -u
# 添加所有文件（. 和 -u的结合）
git add -A 
```

**commit**  将暂存区中的文件提交到本地的仓库

```sh
# 将暂存区的文件添加到本地仓库 并输入描述信息
git commit -m "message"

# 将所有已跟踪文件中的执行修改或删除操作的文件都提交到本地仓库，即使它们没有经过git add添加到暂存区。
git commit -a -m "message"

# 修改
git commit --amend

```

**branch ** 查看/创建/删除/更名分支

```sh
# 查看本地分支
git branch 
# 查看远程分支
git branch -r
# 查看全部分支 （远程和本地）
git branch -a

# 创建分支  
git branch [branchname]

# 删除某个本地分支 
git branch -d/D [branchname]
#删除远程分支
git push origin --delete [branchname]

# 本地分支更名
git branch -m [old_branch] [new_branch]
```

**checkout  ** 切换/创建分支

```sh
# 切换分支
git checkout [branchName]

# 创建并切换到新分支
git checkout -b [branchName]
```

**merge**  合并分支

```sh
# 将某个分支合并到当前分支
git checkout [branchname]
git merge [branchname]
```



**fetch  和 pull** 拉取远程仓库

`git fetch`是将远程主机的最新内容拉到本地，用户在检查了以后决定是否合并到工作本机分支中。

而`git pull` 则是将远程主机的最新内容拉下来后直接合并，即：`git pull = git fetch + git merge`，这样可能会产生冲突，需要手动解决。

```sh
# 只拉取远程分支
git fetch origin [branchname]

# 拉取远程分支并合并
git pull origin [branchname]
```



![](http://kmknkk.oss-cn-beijing.aliyuncs.com/image/git.jpg)

**reset 和 revert**  ：回退到某个版本或重做某一次提交

```sh
# 撤销添加  撤销之后修改还在
git reset HEAD <文件名>

# 回退到某一个版本 回退之后 后面的提交会消失
git reset --hard <commitID>

# 回到某一次的提交 只将这一次的提交清楚
git revert commit 
# 撤销前一次的提交/前前一次提交
git revert HEAD 
git revert HEAD^
```

![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTgwNDE0MjEyMjIxMDMz) 

![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTgwNDE0MjA1ODE2MTg4) 

**tag 给发布结点加上标签**

```sh
# 创建标签
git tag -a <标签信息> -m <描述信息>


# 给过去的某次提交打上tag
git tag -a v1.2 <commitID>
```

**rebase ** 合并提交

```sh
# 将本地的多次提交合并为一个
git rebase -i 
```

**stash**暂存工作状态

使用场景：工作流被打断,需要先做别的需求 

```sh
常用git stash命令：

git stash save "save message" 
git stash list  ：查看stash了哪些存储

git stash pop ：命令恢复之前缓存的工作目录，将缓存堆栈中的对应stash删除，并将对应修改应用到当前的工作目录下,默认为第一个stash,即stash@{0}


git stash pop stash@{$num} ，比如应用并删除第二个：git stash pop stash@{1}

git stash drop stash@{$num} ：丢弃stash@{$num}存储，从列表中删除这个存储
git stash clear ：删除所有缓存的stash
```



## Git Flow

![img](https://images.cnblogs.com/cnblogs_com/cnblogsfans/771108/o_git-flow-nvie.png) 

#### Git Flow常用的分支

- Production 分支

也就是我们经常使用的Master分支，这个分支最近发布到生产环境的代码，最近发布的Release， 这个分支只能从其他分支合并，不能在这个分支直接修改

- Develop 分支

这个分支是我们是我们的主开发分支，包含所有要发布到下一个Release的代码，这个主要合并与其他分支，比如Feature分支。

- Feature 分支

这个分支主要是用来开发一个新的功能，一旦开发完成，我们合并回Develop分支进入下一个Release

- Release分支

预上线分支，当我们的项目要准备上线的时候，先把代码放在这个分支提供给测试人员做上线前的最后一次测试。

当你需要一个发布一个新Release的时候，我们基于Develop分支创建一个Release分支，完成Release后，我们合并到Master和Develop分支

- Hotfix分支

热补丁分支，负责线上紧急问题的修复

当我们在Production发现新的Bug时候，我们需要创建一个Hotfix, 完成Hotfix后，我们合并回Master和Develop分支，所以Hotfix的改动会进入下一个Release

### Git Flow如何工作

#### 初始分支

所有在Master分支上的Commit应该Tag

![img](https://images.cnblogs.com/cnblogs_com/cnblogsfans/771108/o_git-workflow-release-cycle-1historical.png)

#### Feature 分支

分支名 feature/*

Feature分支做完后，必须合并回Develop分支, 合并完分支后一般会删点这个Feature分支，但是我们也可以保留

![img](https://images.cnblogs.com/cnblogs_com/cnblogsfans/771108/o_git-workflow-release-cycle-2feature.png)

#### Release分支

分支名 release/*

Release分支基于Develop分支创建，打完Release分之后，我们可以在这个Release分支上测试，修改Bug等。同时，其它开发人员可以基于开发新的Feature (记住：一旦打了Release分支之后不要从Develop分支上合并新的改动到Release分支)

发布Release分支时，合并Release到Master和Develop， 同时在Master分支上打个Tag记住Release版本号，然后可以删除Release分支了。

![img](https://images.cnblogs.com/cnblogs_com/cnblogsfans/771108/o_git-workflow-release-cycle-3release.png)

#### 维护分支 Hotfix

分支名 hotfix/*

hotfix分支基于Master分支创建，开发完后需要合并回Master和Develop分支，同时在Master上打一个tag

![img](https://images.cnblogs.com/cnblogs_com/cnblogsfans/771108/o_git-workflow-release-cycle-4maintenance.png)



### 面临的一些挑战及解决方案

- 开发分支变动比较频繁，因为别人也在往开发分支合并代码，这样会产生很多的合并冲突

  解决方案：

  当项目人数很多时：时刻保持开发分支和feature分支的差距不能太大，如果开发分支变得比较频繁，每天上班前要把开发分支合并到feature分支。不要等到最后一次去合并。

  当项目人数比较少时：等到自己的功能写完再一次性解决冲突。

- 别人的分支依赖你分支

  解决方案：

  时刻记得要提交自己的代码到远程仓库。每开发完一个模块/一个小功能及时提交。

- 线上版本遇到bug怎么处理

   解决方案:

     在master分支上创建Hotfix分支，将bug进行修复，随后将这个hotfix分支合并到mster分支，保证线上分支没有问题。随后再把Hotfix分支合并到Develop，保证这个Develop分支上不会复现这个bug。

- 项目准备上线进行测试时，遇到bug如何处理

  解决方案：

  如果在Release分支上遇到bug，那么直接在Release分支上进行修复，修复完成之后，将Release分支合并如master分支，再将Release分支合并入Develop 。

