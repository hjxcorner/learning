let map = new Map([
    ["name", "黄金鑫"],
    ["age", 21]
])

let arr = [...map]
console.log(arr)

arr = [...map.keys()]
console.log(arr)

arr=[...map.values()]
console.log(arr)

arr=[...map.entries()]
console.log(arr)