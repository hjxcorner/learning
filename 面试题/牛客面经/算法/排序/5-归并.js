/**
 * 将数组分成两个子序列，再对两个子序列分别进行归并排序
 */


let arr = [2, 4, 6, 3, 5, 9, 10]

function mergeSort(arr) {
  let len = arr.length;
  if(len < 2) {
      return arr;
  }
  let middle = Math.floor(len / 2),
      left = arr.slice(0, middle),
      right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];

  while(left.length>0 && right.length>0) {
      if(left[0] <= right[0]) {
          result.push(left.shift());
      }else{
          result.push(right.shift());
      }
  }

  while(left.length)
      result.push(left.shift());

  while(right.length)
      result.push(right.shift());

  return result;
}

console.log(mergeSort(arr))