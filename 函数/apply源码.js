Function.prototype.myApply = function (context, arr) {
    var context = Object(context) || window;
    context.fn = this;

    var result;
    if (!arr) {
        result = context.fn();
    }
    else {
        context.fn(...arr)
        // var args = [];
        // for (var i = 0, len = arr.length; i < len; i++) {
        //     args.push('arr[' + i + ']');
        // }
        // result = eval('context.fn(' + args + ')')
    }

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

foo.myApply(obj,[1,2,3])