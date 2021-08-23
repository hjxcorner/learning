let str = "hello i love you love"
let n = str.replace("love","hate")
console.log(n)  //hello i hate you love
n = str.replace("love","hate")
console.log(n) //hello i hate you love

/**
 * 1.对大小写敏感
 * 2.只替换首个匹配
 * 3.可以接收正则表达式
 * 4.不会改变原字符串
 */