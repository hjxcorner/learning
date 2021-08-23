// slice(start, end) 左闭右开 

var str = "Apple, Banana, Mango"
var res = str.slice(7,13)
console.log(res) // Banana

res= str.slice(0,1)
console.log(res)  // A

res = str.slice(0)
console.log(res) // Apple, Banana, Mango 不指定第二个参数则表示从开始位置截取


// 传入负值
// 参数为负数时，-1为最后个字符
res=str.slice(-13,-7)
console.log(res) // Banana

res=str.slice(-6)
console.log(res) // Mango


res = str.slice(-2)
console.log(res) //go