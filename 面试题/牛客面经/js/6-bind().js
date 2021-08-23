let a = {name:"hjx"}
let b = {name:"yy"}
let c = {name:"ml"}

function foo(){
    console.log(this)
}

let foo3 = foo.bind(a).bind(b).bind(c) // { name: 'hjx' } this指向a
foo3()

let foo1 = foo.bind(a)
let foo2 = foo1.bind(b)

// foo1
function  fooo1(){
    return foo.call(a);
}

// foo2
function fooo2(){
    return foo1.call(b)
}


foo2()


/**
 * 这里的bind源码中使用的是 call 来修改this指向
 * 
 * 在bind(a)的基础上使用bind(b) 实际上改变了bind(a)返回函数的指向，但是foo中的this指向还是第一次的绑定对象
 * 
 * bind(a)返回函数的指向对foo不会造成影响，因为bind(a)返回的函数中的this与foo中的this没有关联
 */