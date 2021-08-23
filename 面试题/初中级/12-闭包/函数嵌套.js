function fun(n,o){
    console.log(o)
    return {
        fun: function(m){
            return fun(m,n)
        }
    }
}

var a = fun(0) //undifined
a.fun(1)    //0
a.fun(2)    //0
a.fun(3)    //0
/*
    这个题目中的闭包产生在对象上面，而对象中的闭包为：{n:0}
*/


var b = fun(0)  //undifined
        .fun(1) //0
        .fun(2) //1
        .fun(3) //2


var c = fun(0).fun(1) //undifined 0
c.fun(2) //1
c.fun(3) //1


