// let arr = [1, 4, 3, 7, 5, 6, 7, 8, 9, 10]
// const mark = 7

// // 暴力解法
// function foo(arr) {
//     let finalArr = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === mark) {
//                 let medianArr = []
//                 medianArr[0] = arr[i]
//                 medianArr[1] = arr[j]
//                 finalArr.push(medianArr)
//             }
//         }
//     }
//     return finalArr
// }

// let ar = foo(arr)
// console.log(ar)


//先排序

function quckSort(arr, left, right) {
    if (left >= right) return

    left = typeof left === "number" ? left : 0
    right = typeof right === "number" ? right : arr.length - 1

    let mark = Grouping(arr, left, right)
    quckSort(arr, left, mark - 1)
    quckSort(arr, mark + 1, right)


}

function Grouping(arr, left, right) { //分组
    let mark = left,
        index = mark + 1
    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[mark]) {
            swap(arr, index, i)
            index++
        }
    }
    swap(arr, mark, index - 1)
    return index - 1
}

function swap(arr, i, j) {
    let tem = arr[i]
    arr[i] = arr[j]
    arr[j] = tem
}


let arr2 = [3, 2, 5, 1, 66, 4, 9, 7, 6, 5, 4]
quckSort(arr2)
console.log(arr2)


function getSum(arr, sum) {
    if (arr == '' || arr.length == 0) {
        return false;
    }

    var left = 0, right = arr.length - 1;

    while (left < right) {
        if (arr[left] + arr[right] > sum) {
            right--;
        }
        else if (arr[left] + arr[right] < sum) {
            left++;
        }
        else {
            console.log(arr[left] + " + " + arr[right] + " = " + sum);
            left++;
            right--;
        }
    }
}

getSum(arr2,11)