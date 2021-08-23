/**
 * 比较相邻的两个元素每次把较小/较大的元素放到最前面/后面
 */

let arr = [2, 4, 6, 3, 5, 9, 10]

function foo(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                exchange(arr, j, j + 1)
            }
        }
    }
}


function exchange(arr, i, j) {
    let tem = arr[i]
    arr[i] = arr[j]
    arr[j] = tem
}

foo(arr)
console.log(arr)