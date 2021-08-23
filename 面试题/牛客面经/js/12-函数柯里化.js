function curry(a) {
    return function (x) {
        return function (y) {
            return add(x) + add(y)
        }
    }
}

function add(a) {
    return a
}

let a = curry(add)(1)(2)
console.log(a)

