Array.prototype.myMap = function (fn) {
  let arr = this
  let ret = []
  for (let i = 0; i < arr.length; i++) {
    ret.push(fn(arr[i], i, arr))
  }
  return ret
}

let arr = [1,2,3,4,5]

let arr2 = arr.myMap((item, index) => {
  return item + index
})

console.log(arr2)