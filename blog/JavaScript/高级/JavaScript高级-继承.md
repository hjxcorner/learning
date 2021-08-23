---
title: JavaScript高级-继承
tags: ["js", "高级", "继承"]
categories: ["JavaScript", "高级", "继承"]
---

## 继承

### 1.对象拷贝

#### 例子：

```js
        function extend(parent,child){
            for(var key in parent){
                if(child[key]){
                    continue;
                }
                parent[key] = child[key];
            }
        }
```

#### 优缺点：

可以实现对象的拷贝，但是没有实现继承。

<!--more-->

### 2.原型继承

#### 例子：

```js
        function Person (){
            this.name = '' ;
            this.age = '';
            this.money = 10000 ;
        }
        function Student (){
            this.no = '0417' ;
        }
        Student.prototype = new Person() ;
        Student.prototype.constructor = Student ;
        var stu1 = new Student() ;
        console.log(stu1) ;
```

#### 优缺点：

原型继承，实现了继承，但它无法设置构造函数的参数。

### 3.借用构造函数



#### 例子：

```js
        function Person(name,age,sex){
            this.name = name;
            this.age = age;
            this.sex = sex;
        }

        function Student(name,age,sex,score){
 //利用call改变了Person中的this指向 这里使Person中的this指向s1，所以Person中赋值就相当于给s1赋值
            Person.call(this,name,age,sex);
            this.score = score;
        }
        var s1 = new Student('张三',21,'男',100);
        console.log(s1);
```

#### 优缺点：

实现了继承，也可以设置构造函数中的参数，但是无法通过原型添加方法。

### 4.组合继承

#### 例子：

```js
        function Person(name,age,sex){
            this.name = name;
            this.age = age;
            this.sex = sex;
        }
        Person.prototype.saHi = function (){
            console.log('你好 ！！');
        }
        function Student(name,age,sex,score){
            //利用call改变this指向 这里this指向Person
            Person.call(this,name,age,sex);
            this.score = score;
        }
        Student.prototype.kaoshi = function (){
            console.log('考试中！！');
        }
        Student.prototype = new Person();
        Student.prototype.constructor = Student;
        var s1 = new Student('张三',21,'男',100);
        console.log(s1);
        function Teacher(name,age,sex,salary){
            Person.call(this,name,age,sex);
            this.salary = salary;
        }
        Teacher.prototype = new Person();
        Teacher.prototype.constructor = Student;
        var t1 = new Teacher('李四',30,'男',10000);
        console.log(t1);
```

#### 优缺点：

结合了前两种继承的优点，利用原型继承继承方法，利用借用构造器设置属性。

