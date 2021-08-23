# mysql 数据库

## 第一章 了解SQL

### 数据库概念

​		**数据库是**“按照数据结构来组织、存储和管理数据的仓库”。是一个长期存储在计算机内的、有组织的、有共享的、统一管理的**数据集合**。也就是物理操作系统文件或其他形式文件类型的集合。

**数据库分类**

关系型数据库：基于**关系模型**的数据库。使用表结构。海量数据读写慢。

非关系数据库：基于**键值对**、**文档型**、**图形**等模型的数据库。不支持sql。海量数据读写快。

### SQL概念

​		**结构化查询语言**(Structured Query Language)简称SQL(发音：/ˈes kjuː ˈel/  "S-Q-L")，是一种特殊目的的编程语言，是一种数据库查询和程序设计语言，用于存取数据以及查询、更新和管理关系数据库系统；同时也是数据库脚本文件的**扩展名**。

​		1986年10月，美国国家标准协会对SQL进行规范后，以此作为**关系式数据库**管理系统的**标准语言**（ANSI X3.  135-1986），1987年得到国际标准组织的支持下成为**国际标准**。不过各种通行的数据库系统在其实践过程中都对SQL规范作了某些编改和扩充。所以，实际上**不同数据库系统之间的SQL不能完全相互通用**。

### 实例

​       数据库**实例**用于操作数据库文件的。MySQL数据库实例在系统上的表现就是一个**进程**。一般一个实例对应一个数据库。

## 第二章 MySQL简介

数据库管理系统(DBMS)

​		数据库管理系统(Database Management System)是一种操纵和管理数据库的大型软件，用于建立、使用和维护数据库，简称**DBMS**。

三大主流DBMS软件介绍

ORACLE    MySQL     SQL Server 

MySQL介绍

MySQL数据库是DBMS软件,即它是一个关系型数据库管理系统。由瑞典MySQL AB 公司开发，目前属于Oracle旗下产品。MySQL 是最流行的关系型数据库管理系统之一，在 WEB 应用方面，MySQL是最好的 RDBMS (Relational Database Management System，关系数据库管理系统) 应用软件。

**优点：**

- 体积小，速度快，成本低。
- 使用C和C++编写，移植性好。
- 开源，有免费的社区版本使用。
- 支持多线程，充分利用CPU资源

版本：使用版本5.5      最新版8.0

<img src="C:\Users\lining\AppData\Roaming\Typora\typora-user-images\image-20191201231234976.png" alt="image-20191201231234976" style="zoom:50%;" />

mysql 客户机

MySQL是一个客户端-服务器端DBMS。使用MySQL,需要使用客户端。客户端主要功能是给服务器端提供执行的命令。

客户端分类：

(命令行客户端工具)mysql命令行程序

![image-20191201225203512](C:\Users\lining\AppData\Roaming\Typora\typora-user-images\image-20191201225203512.png)

(图形化客户端工具)Navicat 程序

<img src="C:\Users\lining\AppData\Roaming\Typora\typora-user-images\image-20191201225338130.png" alt="image-20191201225338130" style="zoom: 50%;" />

<img src="C:\Users\lining\AppData\Roaming\Typora\typora-user-images\image-20191201225357477.png" alt="image-20191201225357477" style="zoom:50%;" />



## 第三章 安装MySQL

数据库端口号：3306

按照教程文档安装MySQL数据库

## 第四章 使用MySQL

#### 用户登陆和退出

数据库管理员和用户

登陆：连接数据库

```mysql
#方式1：使用root用户登陆本机的mysql数据库
#-u  : 表示用户名
#-p  : 表示用户密码
C:\Windows\system32>mysql -u root -p
#输出root用户密码:root
Enter password: root
```

```mysql
#方式2:明文登陆
#格式: mysql -u 用户名 -p密码 (-p和密码之间没有空格)
C:\Windows\system32>mysql -u root -proot
```

```mysql
#方式3：远程登陆ip地址为192.168.0.5主机的mysql数据库
#-h : 远程主机ip
#-P : 远程服务器端口号(参数时大写P)
#本地登陆数据库时，可以省略远程主机IP和端口号
C:\Windows\system32>mysql -u root -proot -h 192.168.0.5 -P 3306
#使用 -h 和 -P 登陆本机mysql 数据库
C:\Windows\system32>mysql -u root -proot -h 127.0.0.1 -P 3306
#使用 localhost 表示主机地址
C:\Windows\system32>mysql -u root -proot -h localhost -P 3306
```

退出

```mysql
#用户退出登陆
#方式1： 使用quit命令
mysql> quit;
#方式2：使用ctrl+C 命令
```

创建用户

```mysql
#创建用户账号:账号名： briup 密码: briup
mysql>create user briup identified by 'briup';
```

设置用户访问权限

```mysql
#设置briup用户拥有hdjd数据库的所有权限
mysql>grant all on hdjd.* to 'briup'@'%'
```

创建和选择数据库

```mysql
#查看数据库：查询mysql中存在的所有数据库
show databases;
#选择数据库： 选择名字为mysql的数据库
use mysql;
#创建数据库：创建一个新的数据库,命名为hdjd
create database hdjd;
#删除数据库：删除名称为hdjd的数据库
drop database hdjd;
```

插入数据库文件

```mysql
#选择导入数据的数据库hdjd
mysql> use hdjd;
#导入table.sql 文件 使用文件的绝对路径
mysql> source C:/table.sql;
```

## 第五章 查询数据(单表查询)

#### 查询语法

语法格式 ：SELECT column_name,column_name FROM table_name;

- **select**： 作为mysql数据库中的**关键字**，表示对数据库中的信息进行查询。
- **空格**：sql语句中的关键字以空格进行组合。
- **column_name**：表示查询表的列名。列名之间使用逗号隔开。

- **from** ：关键字 指定查询数据的表名。
- **分号** ：sql语句以分号结尾。
- **大小写**：mysql默认情况下**不区分大小写**。

```mysql
#查询emp表中信息
#查询单个列 : 查询员工的员工编号号信息
select id from s_emp;
#查询多个列 :查询员工的员工编号,姓名和工资信息
select id,last_name,first_name,salary from s_emp;
#查询所有列 ：查询员工的所有信息
select * from s_emp;
#方式二： 查询指定表中所有的列
SELECT
	id,
	last_name,
	first_name,
	userid,
	start_date,
	comments,
	manager_id,
	title,
	dept_id,
	salary,
	commission_pct
FROM
	s_emp;
#查询不同行 distinct ： 查询员工中的所有经理编号
SELECT DISTINCT manager_id FROM s_emp;
#使用别名 列的别名 表的别名
-- 表的别名
select a.* from s_emp a; 
select a.id,a.last_name,a.first_name from s_emp a;
-- 列的别名
#查询用户的的员工编号和员工,员工编号列名显示为user_id。员工工资列名显示为user_salary
select a.id as user_id,a.salary as user_salary from s_emp a
#使用表的全限定名查询表信息
select  s_emp.id,s_emp.last_name,s_emp.first_name from s_emp;

```
#### 限制查询

**概念**：SELECT语句返回所有匹配的行，它们可能是指定表中的每个行。为了返回第一行或前几行，可使用**LIMIT**子句 。

语法格式：

-  **limit  num**：num 表示查询的条数

```mysql
#查询员工表中5行数据
select a.id,a.last_name,a.salary from s_emp a LIMIT 5;
```

- **limit  num1 num2**：num1表示从第num1行后开始，不包含该num1行。num2表示查询返回的条数。

```mysql
#查询员工表中第1行到第5行的5条数据
select a.id,a.last_name,a.salary from s_emp a LIMIT 0,5;
#查询员工表中第6行到第15行的10条数据
select a.id,a.last_name,a.salary from s_emp a LIMIT 5,10;
```

- **limit num1 offset num2**：num1: 表示 获取的条数。 num2表示从num2行后开始			

```mysql
#查询员工表中第1行到第5行的5条数据
select a.id,a.last_name,a.salary from s_emp a LIMIT 5 offset 0;
#查询员工表中第6行到第15行的10条数据
select a.id,a.last_name,a.salary from s_emp a LIMIT 10 offset 5;
```

## 第六章 排序查询数据

语法格式：使用select语句的**order by**子句进行查询。order by 子句取一个或多个列的名字进行排序。

#### 单列排序

**ASC** ：关键字表示升序。

```mysql
#asc 升序查询：查询部门表信息,按照部门号升序排序 
select a.id,a.name,a.region_id from s_dept a order by a.id asc;
#asc 升序查询,asc关键字可以省略：查询员工表信息,按照员工名字a-z排序
select a.id,a.last_name from s_emp a order by a.last_name;
```
**DESC** ：关键字表示降序。
```mysql
#desc 升序查询：查询部门表信息,按照部门号降序序排序: 使用desc关键字表示降序
select a.id,a.name,a.region_id from s_dept a order by a.id asc;
#desc 升序查询：查询员工表信息,按照员工名字z-a降序排序
select a.id,a.last_name from s_emp a order by a.last_name desc;
#按多个列排序：查询部门表信息,按照部门名称升序排序，如果名字相同按照编号升序排序。
select * from s_dept a order by a.name,a.id;
```
#### 多列排序

```mysql
#按多个列排序：查询部门表信息,按照部门名称升序排序，如果名字相同按照编号降序排序。
select * from s_dept a order by a.name,a.id desc;
```

#### order by 与limit 组合

语法格式 ：limit子句放在order by子句出现

```mysql
#查询员工号为3到9的员工信息
select a.id,a.last_name,a.salary from s_emp a order by a.id limit 2,7;
#查询员工信息表中员工的最大工资
select a.salary from s_emp a ORDER BY a.salary desc LIMIT 1;
#思考:只使用order by 和limit 组合是否可以查询员工表中最大工资的员工信息?
```

## 第七章 数据过滤

使用**select**语句的**where**子句指定过滤条件。通常情况下，我们查询数据会根据特定条件和情况提取表中的部分数据。并不会查询表中所有的数据。

语法格式：**where** 子句放在**from**子句后面出现。

#### where子句操作符

|   操作符    |      说明       |
| :---------: | :-------------: |
|      =      |      等于       |
|     <>      |     不等于      |
|     !=      |     不等于      |
|      <      |      小于       |
|     <=      |    小于等于     |
|      >      |      大于       |
|     >=      |    大于等于     |
| **between** | 指定在2个值之间 |

##### 过滤单个值

 ```mysql
#=: 查询员工名为Ngao的员工信息
SELECT
	a.id,
	a.last_name,
	a.first_name,
	a.salary
FROM
	s_emp a
WHERE
	a.last_name = 'Ngao';
#<>: 查询不属于41部门的员工信息
SELECT
	a.id,
	a.last_name,
	a.first_name,
	a.salary,
    a.dept_id
FROM
	s_emp a
WHERE
	a.dept_id <> 42;
#!=:查询不属于41部门的员工信息
SELECT
	a.id,
	a.last_name,
	a.first_name,
	a.salary,
    a.dept_id
FROM
	s_emp a
WHERE
	a.dept_id != 42;
#<: 查询工资大于1500的员工信息
SELECT
	a.id,
	a.last_name,
	a.first_name,
	a.salary,
    a.dept_id
FROM
	s_emp a
WHERE
	a.salary >1500;
#between and : 查询工资在 1100到1400之间的员工信息
SELECT
	a.id,
	a.last_name,
	a.first_name,
	a.salary,
    a.dept_id
FROM
	s_emp a
WHERE
	a.salary BETWEEN 1100 and 1400;
 ```

##### 空值过滤

概念：在一个列不包含值时，称为空值null。null 无值，与字段包含0 ，空字符串或者空格不同。

- 为空：is  null
- 不为空：is not null
- 对null值操作特定义的操作符，不能使用=

```mysql
#查询员工工资为空的员工信息
SELECT
	a.id,
	a.last_name,
	a.salary
FROM
	s_emp a
WHERE
	a.salary IS NULL;
#查询员工的经理不为空的员工信息
SELECT
	a.id,
	a.last_name,
	a.manager_id
FROM
	s_emp a
WHERE
	a.manager_id IS NOT NULL;
```

#### 逻辑操作符

##### and 操作符：

- 且逻辑。对多个列进行过滤。


```mysql
#查看员工部门id为41且职位名称为Stock Clerk（存库管理员）的员工id和名字
SELECT
	id,
	last_name,
	dept_id,
	title
FROM
	s_emp
WHERE
	dept_id = 41
AND title = 'Stock Clerk';
```

##### or 操作符
- 或逻辑，任意匹配其中一个条件

```mysql
#查看员工部门为41 或者 44号部门员工id、名字和部门号
SELECT
	a.id,
	a.last_name,
	a.dept_id
FROM
	s_emp a
WHERE
	a.dept_id = 41
OR a.dept_id = 42;
```

##### and 和 or 组合:

- and逻辑比or逻辑要高

```mysql
#查看员工部门为41 或者 44号部门 且工资大于1000的员工id和名字
SELECT
	a.id,
	a.last_name,
	a.dept_id,
  a.salary,
	a.title
FROM
	s_emp a
WHERE
	a.salary > 1000
AND (a.dept_id = 41 OR a.dept_id = 44);
#练习：查看员工部门为41且工资大于1000 或者 44号部门的员工id和名字
SELECT
	a.id,
	a.last_name,
	a.dept_id,
  a.salary,
	a.title
FROM
	s_emp a
WHERE
	a.salary > 1000
AND a.dept_id = 41 OR a.dept_id = 44;
```
##### in 操作符

- 用来指定条件范围，范围中的每个条件都可以进行匹配 。
- 圆括号包围，逗号分隔。
- in的操作符比or操作符的**效率高**

```mysql
#查看员工号1,3,5,7,9员工的工资
SELECT
	a.id,
	a.last_name
FROM
	s_emp a
WHERE
	a.id IN (1, 3, 5, 7, 9);
```

##### not 操作符

- 非逻辑。否定它之后所跟的任何条件  
- **not in**  
- **not like ** 
- **is not null** 
- **not between**

```mysql
#查询员工工资不在1000到1500范围的员工信息
SELECT
	a.id,
	a.last_name,
    a.salary
FROM
	s_emp a
WHERE
	a.salary not BETWEEN 1000 and 1500;
#查询员工不在41或42或43部门的员工信息
SELECT
	a.id,
	a.last_name,
	a.dept_id
FROM
	s_emp a
WHERE
	a.dept_id NOT IN (41, 42, 43);
```

##### like 操作符

- %：通配0到多个字符。
- _ : 当且仅当通配一个字符
- 转义字符：默认为\,可以指定 指定的时候用escape 符号指明即可,转义字符只能转义后面的一个字符
- 通配符操作位于开始处，搜索效率最慢

```mysql
#查看员工名字以N或n字母开头的员工的信息
#注：mysql 默认查询时，不区分大小写。可以通过在创建表时，添加 BINARY属性进行区分。
#或者在where子句中添加 BINARY关键字 格式： where binary ...
SELECT
	a.id,
	a.last_name
FROM
	s_emp a
WHERE
	a.last_name LIKE 'N%';
#查看员工名字以大写N字母结尾的员工的信息
SELECT
	a.id,
	a.last_name
FROM
	s_emp a
WHERE BINARY
	a.last_name LIKE '%N';
#查看员工名字第三个字母是a员工的信息
SELECT
	a.id,
	a.last_name
FROM
	s_emp a
WHERE BINARY
	a.last_name LIKE '__a%';
```



## 第八章 使用函数

​		SQL支持利用函数来处理数据。函数一般是在数据上执行的，它给数据的转换和处理提供了方便 。

**dual**：哑表。

- dual是一个虚拟表，用来构成select的语法规则。mysql中可以不使用 dual。
   例如:
   显示1+1的结果,可以看出,dual很多时候是为了构成select的标准语法。


```mysql
  #计算1+1
  select 1+1;
  select 1+1 from dual;
```

##### 字符串函数

| 函数                     | 说明                                   | 例子                        |
| :----------------------- | :------------------------------------- | --------------------------- |
| lower(str)               | 把字符转为小写                         | select LOWER('ABC');        |
| upper(str)               | 把字符转换为大写                       | select UPPER('hello');      |
| trim(str)                | 去掉开始和结尾处的空格                 | select TRIM('  abc  ');     |
| concat(str,str2,...)     | 多个字符串合并为一个字符串             | select concat('a','b','c'); |
| length(str)              | 返回字符串的长度，                     | select LENGTH('hello');     |
| substr(str,start,length) | 截取start 位置长度为 length 的子字符串 | select substr('hello',2,3); |

```mysql
#显示员工的id和姓名 格式如下： id|last_name|first_name
SELECT
	CONCAT(
		a.id,
		'|',
		a.last_name,
		'|',
		a.first_name
	)
FROM
	s_emp a;
```

##### 数字函数

- round（arg1,arg2）:四舍五入
  - arg1: 四舍五入操作的数字
  - arg2:保留到哪一位。负数表示整数位，正数表示小数位。

```mysql
#3.1415保留3位小数：3.142
select ROUND(3.1415,3);
#127.57保留到个位：128
select ROUND(127.57,0);
#127.57保留到十位：130
select ROUND(127.57,-1);
```

- truncate(arg1,arg2) 截取到某一位
  - 和round的用法一样,但是trunc只舍去不进位。

```mysql
#3.1415截取3位小数：3.141
select truncate(3.1415,3);
#127.57保留到个位：128
select ROUND(127.57,0);
#127.57保留到十位：130
select ROUND(127.57,-1);
```

##### 日期函数

| 函数      | 说明               | 例子                |
| --------- | ------------------ | ------------------- |
| curtime() | 返回当前时间       | select curtime();   |
| now()     | 返回当前时间和日期 | select curtime();   |
| curdate() | 返回当前日期       | select curdate();   |
| date(exp) | 返回时间的日期部分 | select date(now()); |
| time(exp) | 返回时间的时间部分 | select time(now()); |

```mysql
#查询当前的年份，月份，星期，小时，分钟
SELECT
	YEAR (now()),
	MONTH (now()),
	WEEKDAY(now()) + 1,
	HOUR (NOW()),
	MINUTE (now()),
	SECOND (now())
FROM
	DUAL;
#查询入职时间为1991的员工id,名字和入职年份
SELECT
	a.id,
	a.last_name,
	YEAR (a.start_date) AS start_year
FROM
	s_emp a
WHERE
	YEAR (a.start_date) = 1991
#查询入职时间在1991年5月1日到1991年11月15日份入职的员工信息
#如果比较的字段是日期类型。请使用Date()函数对日期进行比较。
SELECT
	a.id,
	a.last_name,
	a.start_date
FROM
	s_emp a
WHERE
	DATE(a.start_date) BETWEEN '1991-05-01'
AND '1991-11-15'
ORDER BY
	a.start_date;
#查询入职时间在1991年2月份的员工信息
SELECT
	*
FROM
	s_emp a
WHERE
	YEAR (a.start_date) = 1991
AND MONTH (a.start_date) = 2;

```
##### 系统函数

|      函数       |        作用        |
| :-------------: | :----------------: |
|    version()    | 查看数据库的版本号 |
|     user()      |    查看当前用户    |
| cast(x AS type) |    数据类型转换    |

```mysql
#显示当前登录用户
select user();
#显示当前数据库版本
select version();
#将'2019-10-10'转换成日期类型
select CAST('2019-10-10' AS date);
#
```

#### 组函数

用作**统计**使用，又称为**聚合函数**或**统计函数**或**组函数**。

| 组函数  |        说明        |
| :-----: | :----------------: |
|  avg()  |  返回某列的平均值  |
| count() |   返回某列的行数   |
|  sum()  |   返回某列值的和   |
|  max()  | 返回某列值的最大值 |
|  min()  | 返回某列值的最小值 |

```mysql
#查询所有员工的平均工资
select avg(a.salary) from s_emp a;
#查询员工中最低工资
select min(a.salary) from s_emp a;
#查询员工最晚入职时间。
select max(a.start_date) from s_emp a;
# max() 可以使用在文本值上吗？
#查询员工的总人数
select count(*) from s_emp a;
select count(a.id) from s_emp a;
#查询41号部门员工的工资总额。
SELECT
	sum(a.salary)
FROM
	s_emp a
WHERE
	a.dept_id = 41;
#查询员工表中员工所属的部门的数量。
SELECT
	count(DISTINCT a.dept_id)
FROM
	s_emp a;
#显示员工表中员工的最大工资，最小工资，和平均工资的信息
SELECT
	max(a.salary) AS max_salary,
	min(a.salary) AS min_salary,
	avg(a.salary) AS avg_salary
FROM
	s_emp a;
```

count(*) 和count(colunm) 的区别：

使用count(column)对特定列中具有值的行进行计数，忽略null值  。使用COUNT(*)对表中行的数目进行计数 。不忽悠null值。

## 第九章 数据分组

### group by 子句（分组）

- GROUP BY子句可以包含任意数目的列 
- 除组函数修饰的列外， SELECT语句中的每个列都必须在GROUP BY子句中列出  
- 如果分组列中具有NULL值，则NULL将作为一个分组返回  
- GROUP BY子句必须出现在WHERE子句之后， ORDER BY子句之前  

```mysql
#查询每个经理所管理的员工人数。
SELECT
	a.manager_id,
	count(a.id)
FROM
	s_emp a
WHERE
	a.manager_id IS NOT NULL
GROUP BY
	a.manager_id;
#查询每个部门的平均工资
SELECT
	a.dept_id,
	avg(a.salary)
FROM
	s_emp a
GROUP BY
	a.dept_id
#查询每个部门的最大工资，按照部门号升序排序
SELECT
	a.dept_id,
	max(a.salary)
FROM
	s_emp a
GROUP BY
	a.dept_id
order by a.dept_id
#查询 31 32 33 部门的平均工资，按照平均工资降序显示
SELECT
	a.dept_id,
	avg(a.salary)
FROM
	s_emp a
WHERE
	a.dept_id IN (31, 32, 33)
GROUP BY
	a.dept_id
ORDER BY
	avg(a.salary) DESC
```

### having 子句（过滤）

- where和having的区别：
  - where过滤行信息。 having 过滤分组信息。
  - where 在分组前过滤 。having在分组后过滤。 
  - where后面一定【不能】出现组函数。having可以出现组函数
  - where语句要紧跟from后面。having语句要紧跟group by后面



- having 支持所有where子句的操作符。

```mysql
#查询s_emp表中部门的平均工资大于等于1400的部门
SELECT
	dept_id,
	avg(salary)
FROM
	s_emp
GROUP BY
	dept_id
HAVING
	avg(salary) >= 1400;
#是否可以直接使用where进行过滤。 而不使用having?

```

### select 子句的执行顺序

**select > from > where >group by > having >order by > limit**

## 第十章 多表查询

​		多表查询，又称表联合查询，即一条sql语句涉及到的表有多张，数据通过特定的连接进行联合显示。

### 笛卡尔积
​	在数学中，两个集合X和Y的笛卡尓积（Cartesian product），又称直积，表示为X × Y。假设集合A={a, b}，集合B={0, 1, 2}，则两个集合的笛卡尔积为{(a, 0), (a, 1), (a, 2), (b, 0), (b, 1), (b, 2)}。
在数据库中,如果直接查询俩张表,那么其查询结果就会产生笛卡尔积

```mysql
#例如:
select * from s_emp,s_dept;
```

### 连接查询
​		为了在多表查询中**避免笛卡尔积**的产生,我们可以使用连接查询来解决这个问题。连接查询分为:

1. **等值连接**

2. **不等值连接**

3. **外连接**
   
   - `左外连接`
   - `右外连接`
   - `内连接`
   
4. **自连接**
#### 等值连接
​		利用一张表中某列的值和另一张表中某列的值相等的关系,把俩张表连接起来。

```mysql
#例如:查询员工的名字、部门编号、部门名字
#为了表述的更加清楚,可以给每张表起别名
SELECT
	a.id,
	a.last_name,
	a.dept_id,
	b.name
FROM
	s_emp a,s_dept b -- 多张表使用逗号分隔
where a.dept_id = b.id -- 连接的关系： 2张表中存在字段表示相同的含义列名相同
```
#### 外连接

**场景**：

```mysql
#先分别在俩s_emp和s_dept表中插入新的数据
#特点:新员工tom不在任何部门,新增部门st下面没有任何员工
insert into s_emp(id,last_name) values(27,'tom');
insert into s_dept(id,name) values(60,'st');
```

等值连接查询 

```mysql
#例如:查询员工的名字、部门编号、部门名字
SELECT
	a.id,
	a.last_name,
	a.dept_id,
	b.name
FROM
	s_emp a,s_dept b 
where a.dept_id = b.id 
```

​		观察查询结果是否正确显示数据？

​		答：这个时候再使用等值连接的话,查询出来的数据就会少,因为新增的员工tom和部门表中的数据连接不上,当然新增的部门st也和员工表中的数据连接不上.那么这俩条数据都是在等值连接中查询不出来。


​		**概念**：许多连接将一个表中的行与另一个表中的行相关联。但有时候会需要包含没有关联行的那些行 。连接包含了那些在相关表中没有关联行的行。这种类型的连接称为**外连接**。

- ​		外连接分为:左外连接 右外连接 内连接。


##### 左外连接

​		概念：取得左表（table1）完全记录，即是右表（table2）并无对应匹配记录。

```mysql
#查询所有员工 以及对应的部门的名字,没有部门的员工也要显示出来
SELECT
	a.last_name,
	a.dept_id,
	b.`name`
FROM
	s_emp a
LEFT OUTER JOIN s_dept b
ON a.dept_id = b.id;
#注意:outer可以省去不写
```

##### 右外连接

​		概念：取得右表（table2）完全记录，即是左表（table1）并无匹配对应记录。

```mysql
#查询所有员工 以及对应的部门的名字,没有任何员工的部门也要显示出来
SELECT
	a.last_name,
	a.dept_id,
	b.`name`
FROM
	s_emp a
RIGHT OUTER JOIN s_dept b 
ON a.dept_id = b.id;
#注意:outer可以省去不写
```

##### 内连接

​		概念：用于取得两个表中存在连接匹配关系的记录。

```mysql
#查询所有员工 以及对应的部门的名字,只显示有部门的员工信息及对应的部门名字
SELECT
	a.last_name,
	a.dept_id,
	b.`name`
FROM
	s_emp a
INNER  JOIN s_dept b 
ON a.dept_id = b.id;
```

#### 自连接

​		概念：一张表,自己和自己连接。

```mysql
#查询每个员工的名字以及员工对应的管理者的名字
SELECT
	a.last_name,
	b.last_name manager_name
FROM
	s_emp a,
	s_emp b
WHERE
	a.manager_id = b.id;
```

## 第十一章 使用子查询(嵌套查询)

​		概念：一个select语句中嵌套了另外的一个或者多个select语句。

```mysql
#查询工资比Simth工资高的员工信息
SELECT
  a.last_name,
	a.salary
FROM s_emp a
WHERE salary > (
		SELECT salary
		  FROM s_emp b
		 WHERE b.last_name = 'Smith'
	);
#查询平均工资比41号部门的平均工资高的部门中员工的信息
SELECT
	a.last_name,
	a.salary,
	a.dept_id
FROM
	s_emp a
WHERE a.dept_id IN (
	SELECT b.dept_id
	  FROM s_emp b
  GROUP BY b.dept_id
	HAVING avg(b.salary) > (
		SELECT avg(c.salary)
		FROM s_emp c
		WHERE c.dept_id = 41
	)
);
```

## 第十一章 组合查询

​		概念：如果有俩条sql语句,每一条sql都可以查询出一个结果,这个被称之为结果集。MySQL也允许执行多个查询（多条SELECT语句），并将结果集作为单个查询结果集返回 。这个操作称为**组合查询**。

语法规则：

- `Union`必须由两条或者两条以上的`SELECT`语句组成，语句之间使用`Union`链接
- 俩个结果集中【查询的列】要完全一致。



union：查询结果集中自动去除了重复的行 。

 union all：查询所有的结果集。

```mysql
#查询员工号1 2 3 4的员工信息
select a.id from s_emp a where a.id in (1,2,3,4);
#查询员工号1 2 3 5的员工信息
select a.id from s_emp a where a.id in (1,2,3,5);
#并集操作 :重复数据显示一次
select a.id from s_emp a where a.id in (1,2,3,4)
union 
select a.id from s_emp a where a.id in (1,2,3,5);
#把俩个结果集合在一起显示出来，重复全部显示，对结果集不做任何处理
select a.id from s_emp a where a.id in (1,2,3,4)
union all
select a.id from s_emp a where a.id in (1,2,3,5);
```

##### 对组合查询结果排序  

- 不允许使用多条ORDER BY子句  
- 必须出现在最后一条SELECT语句之后 

```mysql
#对上述结果集进行排序，按照员工号进行降序
select a.id from s_emp a where a.id in (1,2,3,4)
union 
select b.id from s_emp b where b.id in (1,2,3,5)
order by id desc;
```

##### 不同表的组合查询

```mysql
#查询员工号，部门号，区域号
select a.id from s_emp a
union all
select b.id from s_dept b
union all
select c.id from s_region c
#查询员工号，员工名称，部门号，部门名称，区域号，区域名称
select a.id,a.last_name as name from s_emp a
union all
select b.id,b.`name` from s_dept b
union all
select c.id,c.`name` from s_region c
```

综合练习：

```mysql
#1.查询员工表中工资最小的员工信息及所在部门的名称和区域的名称
#2.查询平均工资比 41号部门的平均工资 高的部门中员工的信息,并且显示出当前部门的平均工资
/*3.查询平均工资比 41号部门的平均工资 高的部门中员工的信息,并且显示出当前部门的平均工资,同时显示出部门的名字*/
#4.查询员工信息,这些员工的工资要比自己所在部门的平均工资高
#5.查询员工信息,这些员工的工资要比自己所在部门的平均工资高,同时显示部门的名称以及所在地区
/*6.查询工资比 Ngao所在部门平均工资 要高的员工信息,同时这个员工所在部门的平均工资 也要 比Ngao所在部门的平均工资要高*/
/*7.查询工资比 Ngao所在部门平均工资 要高的员工信息,同时这个员工所在部门的平均工资 也要 比Ngao所在部门的平均工资要高,显示当前部门的平均工资/
/*8.查询工资比 Ngao所在部门平均工资 要高的员工信息,同时这个员工所在部门的平均工资 也要 比Ngao所在部门的平均工资要高,显示当前部门的平均工资以及部门的名字和所在地区*/
```