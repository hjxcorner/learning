Array.prototype.mySlice = function (start, end) {
    let len = this.length
    console.log(len)
    let l = start === undefined ? 0 : start >= 0 ? Math.min(start, len) : Math.max(start + len, 0)
    let r = end === undefined ? len : end >= 0 ? Math.min(end, len) : Math.max(end + len, 0)
    console.log(l, r)
    const res = []
    while (l < r) {
        res.push(this[l++])
    }
    return res
}


let arr = [1, 2, 3, 4, 5, 6]
let arr2 = arr.mySlice(0,)

console.log(arr2)
// Array.prototype.slice2 = function (start, end) {
//   let len = this.length;
//   let l = start === undefined ? 0 : start < 0 ? Math.max(start + len, 0) : Math.min(start, len);
//   let r = end === undefined ? len : end < 0 ? Math.max(end + len, 0) : Math.min(end, len);
//   const res = [];
//   while (l < r) {
//     res.push(this[l++])
//   }
//   return res;
// }