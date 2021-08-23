var str = "       Hello World!        ";
let n = str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
console.log(n) //Hello World!
console.log(str) //       Hello World!        

/**
 * 不会改变原字符串
 */

