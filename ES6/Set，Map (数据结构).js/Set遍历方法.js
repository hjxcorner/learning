let set = new Set([1,1,2,3,3,4,4,5,5])
console.log(set) // Set { 1, 2, 3, 4, 5 }


// Set 结构的实例有四个遍历方法，可以用于遍历成员。
// Set.prototype.keys()：返回 键名 的遍历器
// Set.prototype.values()：返回 键值 的遍历器
// Set.prototype.entries()：返回 键值对 的遍历器
// Set.prototype.forEach()：使用 回调函数遍历每个成员


for(let item of set.keys()){
    console.log(item) 
}
// 1
// 2
// 3
// 4
// 5


for(let item of set.values()){ //这里的values()可以省略 所得结果相同
    console.log(item) 
}
// 1
// 2
// 3
// 4
// 5


for(let item of set.entries()){
    console.log(item) 
}
// [ 1, 1 ]
// [ 2, 2 ]
// [ 3, 3 ]
// [ 4, 4 ]
// [ 5, 5 ]



set.forEach((item)=>{
    console.log(item)
})
// 1
// 2
// 3
// 4
// 5