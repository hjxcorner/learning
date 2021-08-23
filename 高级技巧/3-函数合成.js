const compose = function (f, g, x) {
    return function () {
        return f(g(x));
    };
}

function f(y) {
    return y + 1
}
function g(x) {
    return x * 3
}

console.log(compose(f, g, 2)()) 
