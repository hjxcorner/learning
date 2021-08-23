
let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16, 17]]

let left, right, top, bottom
function foo(arr, n) {
  if(n <= 0) return;
  for (let i = 0; i < 2 * n - 2; i++) {
    if(i === 0) {
      for (let j = 0; j < n; j++) {
        console.log(arr[i][j]);
      }
      continue;
    }
    if(i === n - 1) {
      for (let j = n - 1; j >= 0; j--) {
        console.log(arr[i][j]); 
      }
      continue;
    }
    if(i > n) {
      for (let j = n - 2; j > 0; j--) {
        console.log(arr[j][0])
      }
      continue;
    }
    if(i < n) {
      console.log(arr[i][n - 1])
    }
  }
  arr.pop()
  arr.shift()
  for (let i = 0; i < arr.length; i++) {
    arr[i].pop();
    arr[i].shift();
  }
  foo(arr, arr.length)
}

foo(arr, 4);