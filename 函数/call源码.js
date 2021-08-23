Function.prototype.myCall = function (context, ...args) {
    var context = context || window;
    context.fn = this;
    var result = context.fn(...args)
    delete context.fn
    return result;
}

let a = '345'
let obj = {
    a: '123'
}

function foo(b,c,d) {
    console.log(this.a, b, c, d)
}

// foo();
foo.myCall(obj,1,2,3);