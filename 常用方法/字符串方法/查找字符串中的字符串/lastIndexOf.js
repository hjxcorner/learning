//返回字符串最后出现的位置
var str = "The full name of China is the People's Republic of China"
var pos = str.lastIndexOf("China")
console.log(pos) //51

pos = str.indexOf("hhh")
console.log(pos) // -1 表示没找到


pos = str.lastIndexOf("China", 50) //这里的50表示从第50个字符进行查找 即：将第50个字符作为最后一个字符进行查找
console.log(pos)  //17