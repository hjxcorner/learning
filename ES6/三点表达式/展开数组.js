let arr1 = [1,2,3]

let arr2 = [0,...arr1, 4]

console.log(arr2) // [ 0, 1, 2, 3, 4 ]

console.log(...arr2) // 0 1 2 3 4

console.log(arr2[0],arr2[1],arr2[2], arr2[3], arr2[4]) // 0 1 2 3 4