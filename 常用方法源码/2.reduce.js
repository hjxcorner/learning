Array.prototype.myReduce = function (fn, n) {
  let arr = this
  let pre
  if (!n) {
    pre = arr[0]
    for (let i = 1; i < arr.length; i++) {
      pre = fn(pre, arr[i], i, arr)
    }
  } else {
    pre = n
    for (let i = 0; i < arr.length; i++) {
      pre = fn(pre, arr[i], i, arr)
    }
  }
  return pre
}

let arr = [1,2,3,4,5]
let a = arr.myReduce((pre, cur) => {
  return pre + cur
})

let b = arr.myReduce((pre, cur) => {
  return pre + cur
}, 2)
console.log(a);
console.log(b);

