Function.prototype.myCall = function (target, ...ags) {
  let context = target || window
  context.fn = this
  let ret = context.fn(...ags);
  delete context.fn;
  return ret
}

a = 3, b = 4;

let obj = {
  a: 1,
  b: 2
}

function foo(a,b,c) {
  console.log(this)
  console.log(this.a, a, b, c)
}

foo.call(obj,2,2,2)
foo(5,6,7)