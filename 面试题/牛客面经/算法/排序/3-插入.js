/**
 * 从已排序的序列中，找到合适的位置插入
 * 
 * 从第一个元素开始，该元素可以认为已经被排序；
 * 取出下一个元素，在已经排序的元素序列中从后向前扫描；
 * 如果该元素（已排序）大于新元素，将该元素移到下一位置；
 * 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
 * 将新元素插入到该位置后；
 * 重复步骤2~5。
 */

let arr = [2, 4, 6, 3, 5, 9, 10]

// function insertionSort(arr) {
//     let len = arr.length
//     let preIndex, current
//     for (let i = 1; i < len; i++) {
//         current = arr[i] // 暂时保存当前值
//         preIndex = i - 1 
//         while (preIndex >= 0 && arr[preIndex] > current) {
//             arr[preIndex + 1] = arr[preIndex]
//             preIndex--
//         }
//         arr[preIndex + 1] = current
//     }
//     return arr
// }

console.log(insertionSort(arr))

function insertionSort(arr) {
    let current, preIndex
    for (let i = 0; i < arr.length; i++) {
        current = arr[i];
        preIndex = i - 1
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex]
            preIndex --
        }
        arr[preIndex + 1] = current
    }
    return arr
}