let arr = [1, 55, 33, 4, 6, 9, 2, 0]

function foo(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                replace(arr, i, j)
            }
        }
    }
}

function replace(arr, i, j) {
    let tem = arr[i]
    arr[i] = arr[j]
    arr[j] = tem
}


foo(arr)
console.log(arr)


/**
 * 从第一个元素开始，让第一个元素与后面的元素比较，
 * 若从小到大排序，则将较小的元素与第一个元素交换在数组中的位置，
 * 若从大到小排列，则将较大的元素与第一个元素交换在数组中的位置。
 *
 */
