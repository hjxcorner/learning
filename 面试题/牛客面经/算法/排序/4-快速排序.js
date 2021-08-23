/**
 * 先选定一个基准，将数组以基准为分割线放到基准的两边，然后递归。
 */

let arr = [2, 4, 6, 3, 5, 9, 10]

// function quickSort(arr, left, right) {
//     var len = arr.length,
//         partitionIndex,
//         left = typeof left != 'number' ? 0 : left,
//         right = typeof right != 'number' ? len - 1 : right;

//     if (left < right) {
//         partitionIndex = partition(arr, left, right);
//         quickSort(arr, left, partitionIndex - 1);
//         quickSort(arr, partitionIndex + 1, right);
//     }
//     return arr;
// }

// function partition(arr, left, right) {     // 分区操作
//     var pivot = left,                      // 设定基准值（pivot）
//         index = pivot + 1;  //用于记录基准将来的位置 即 基准将和这个数交换
//     for (var i = index; i <= right; i++) {
//         if (arr[i] < arr[pivot]) {
//             swap(arr, i, index);
//             index++;
//         }
//     }
//     swap(arr, pivot, index - 1);
//     return index - 1;
// }

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function sort(arr, left, right) {
    if (right <= left) {
        return
    }
    var leng = arr.length,
        left = typeof left === "number" ? left : 0,
        right = typeof right === "number" ? right : leng - 1

    let partitionIndex = partition(arr, left, right)  //基准分区之后的位置
    //对基准左右两边递归快排
    sort(arr, left, partitionIndex - 1)
    sort(arr, partitionIndex + 1, right)
}

function partition(arr, left, right) {
    let mark = left,
        index = left + 1 //分别记录基准和将来基准可能的位置index
    for (let i = index; i < arr.length; i++) {
        if (arr[i] < arr[mark]) {
            swap(arr, i, index)
            index++ //后移
        }
    }
    swap(arr, mark, index - 1)  // mark必须和一个小于它的数交换所以 index需要减一
    return index - 1
}


sort(arr)
console.log(arr)