Array.prototype.mySlice = function (start, end) {
  let len = this.length
  let l = start === undefined ?
    0 : start >= 0 ?
      Math.min(start, len) : Math.max(start + len, 0)
  let r = end === undefined ?
    len : end >= 0 ?
      Math.min(end, len) : Math.max(end + len, 0)
  const res = []
  while (l < r) {
    res.push(this[l++])
  }
  return res
}