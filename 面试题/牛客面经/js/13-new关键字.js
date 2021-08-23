function foo() {
    this.a = 1
    return {
        b: 4,
        c: 5
    }
}
foo.prototype.a = 6
foo.prototype.b = 7
foo.prototype.c = 8
var o = new foo()
console.log(o.a)
console.log(o.b)
console.log(o.c)

/**
 * new关键字做了什么：
 *  1-创建一个空对象
 *  2-将对象的原型指向构造函数的原型
 *  3-将构造函数的this指向这个对象
 *  4-返回这个对象
 */