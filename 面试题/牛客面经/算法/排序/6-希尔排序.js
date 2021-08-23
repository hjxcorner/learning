/**
 * 步骤：
 * 1. 将数组按间隔分组，通常间隔为数组长的一半
 * 2. 用插入排序将组内元素排好序
 * 3. 重新按间隔分组，间隔为上一次间隔的一半
 * 4. 重复步骤1-3
 */

let arr = [2, 4, 6, 3, 5, 9, 10, 11, 0]

// function shellSort(arr) {
//   let len = arr.length;
//   for(let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
//       // 注意：这里和动图演示的不一样，动图是分组执行，实际操作是多个分组交替执行
//       for(let i = gap; i < len; i++) {
//           let j = i;
//           let current = arr[i];
//           while(j - gap >= 0 && current < arr[j - gap]) {
//                arr[j] = arr[j - gap];
//                j = j - gap;
//           }
//           arr[j] = current;
//       }
//   }
//   return arr;
// }
console.log(shellSort(arr))

function shellSort(arr) {
  let leng = arr.length
  for (let gap = Math.floor(leng / 2); gap > 0; gap = Math.floor(gap / 2)) {
    console.log(gap)
    for (let i = gap; i < leng; i++) { // 组内插入排序
      let current = arr[i]; // 记录当前值
      let j = i
      while (j - gap >= 0 && arr[j - gap] > current) {
        arr[j] = arr[j - gap]
        j = j - gap;
      }
      arr[j] = current
    }
  }
  return arr
}