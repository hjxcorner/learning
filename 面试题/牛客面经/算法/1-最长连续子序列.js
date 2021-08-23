

/**
 * 设计思路：
 *      1.找出字符串中所有的连续字符串，并把他们保存到一个数组中
 *      2.找出数组中最长字符串的长度
 *      3.用filter函数筛选出长度为最大长度的字符串
 */



let str = "aaabbaaaccdefaghhhhhhcccccc"
function fn(str, arr = []) {

    let childStr = str[0] //保存连续子序列,初始值让其为字符串第一个字符

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            childStr += str[i + 1]
        } else {
            arr.push(childStr)
            childStr = str[i + 1]
        }

    }
    return arr
}

let arr = fn(str)
console.log(arr)

// 在数组中找出最长的一个或多个字符串
function findLongest(arr) {

    let longest = 0

    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > longest){
            longest = arr[i].length
        }
    }

    return arr.filter((item,index)=>{
        return item.length == longest
    })
}

console.log(findLongest(arr)) 


/**
 * 为什么可以用 [] 的形式去访问字符串？
 * 
 * 
 */