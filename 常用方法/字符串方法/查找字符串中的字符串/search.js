//返回字符串首次出现的位置 但是不能传入第二个参数指定开始查找位置
//search可以设置正则表达式进行搜索
var str = "The full name of China is the People's Republic of China"
var pos = str.search("China")
console.log(pos) //17

pos = str.search("hhh")
console.log(pos) // -1 表示没找到

var pos = str.search("China", 18) //这里的参数无效
console.log(pos) //17