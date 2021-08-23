// function bind(fn,context){
//     return function(){
//         return fn.apply(context,arguments)
//     }
// }

let obj = {
    msg:"我是对象"
}

let msg = "我是window"

function foo(){
    console.log(this)
    console.log(arguments)
}

// foo(1,2,3)
// bind(foo,obj)(1,2,3)


Function.prototype.mybind = function(obj){
    let _this = this
    return function(){
        return _this.apply(obj,arguments)
    }
}

let foo2 = foo.mybind(obj)

foo2(1,2,3)

