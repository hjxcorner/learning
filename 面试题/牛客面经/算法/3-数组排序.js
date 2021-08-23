/**
 * 冒泡算法
 * 
 * 思路：经过多轮的比较，每一次找出最大/最小 放到数组起始位置
 */

let arr1 = [1, 4, 2, 6, 5, 3]

function fn1(arr) { // 升序排列
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                exchange(arr, i, j)
            }
        }
    }
}

function exchange(arr, i, j) {
    let tem = arr[i]
    arr[i] = arr[j]
    arr[j] = tem
}

fn1(arr1)
console.log(arr1) // [ 1, 2, 3, 4, 5, 6 ]


/**
 * 用js提供的sort方法
 */

let arr2 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0,10]
function compare(value1, value2) {
    return value1 - value2 // 为正数时value2在前，value1在后  为负数时，value1
}
arr2.sort(compare)
console.log(arr2)