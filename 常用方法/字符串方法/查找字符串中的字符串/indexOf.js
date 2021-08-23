//返回字符串首次出现的位置 返回-1表示未找到
var str = "The full name of China is the People's Republic of China"
var pos = str.indexOf("China")
console.log(pos) //17

pos = str.indexOf("hhh")
console.log(pos) // -1 表示没找到

var pos = str.indexOf("China", 18) //将第十八个字符作为第一个字符开始查找
console.log(pos) //51