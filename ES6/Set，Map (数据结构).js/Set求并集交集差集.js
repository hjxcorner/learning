let arr1 = new Set([1, 3, 5, 7]) 
let arr2 = new Set([3, 5, 7,9]) 

// 求并集

let union = new Set([...arr1, ...arr2])

console.log(union) //Set { 1, 3, 5, 7, 9 }

// 求交集

let intersect = new Set([...arr1].filter(item => arr2.has(item)))
console.log(intersect) // Set { 3, 5, 7 }

//求差集
let difference  = new Set([...arr1].filter(item => !arr2.has(item)))
console.log(difference) // Set { 1 }