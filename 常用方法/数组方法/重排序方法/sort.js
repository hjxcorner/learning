/**
 * 按升序排列数组项，他会调用每个数组项的toString()方法，然后比较得到的字符串以确定如何排序。
 * 
 * 改变原数组
 */

let arr = [0, 1, 2, 3, 10, 15]

arr.sort()
console.log(arr) // [ 0, 1, 10, 15, 2, 3 ] 并没有实现数组的升序排列，因为比较的是字符串，'2' > '10'
console.log('2' > '10') //true


/**
 * sort方法需要配合一个比较方法来用：
 *      如果第一个参数应位于第二个参数之前，则返回一个负数；
 *      如果第一个参数应位于第二个参数之后，则返回一个正数；
 *      如果两个参数相等，则返回0;
 *  */  



function compare1(value1, value2) { //从小到大排列
    if (value1 < value2) {
        return -1
    } else if (value1 > value2) {
        return 1
    } else {
        return 0
    }
}

function compare2(value1, value2) { //从大到小排列
    if (value1 < value2) {
        return 1
    } else if (value1 > value2) {
        return -1
    } else {
        return 0
    }
}

// 比较方法的简写形式
function compare(value1,value2){
    return value1 - value2  //从小到大排列
}

arr.sort(compare1)
console.log(arr) //[ 0, 1, 2, 3, 10, 15 ]
arr.sort(compare2)
console.log(arr) //[ 15, 10, 3, 2, 1, 0 ]

arr.sort(compare)
console.log(arr) // [ 0, 1, 2, 3, 10, 15 ]