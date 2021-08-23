// Map容器：不重复的多个键值对的集合体（多个数组的集合体）
// 这里的键范围更广 可以是复杂类型 如：数组 对象

// let obj = { name: "黄金鑫" }
// let map2 = new Map()
// map2.set(obj, "content")
// console.log(map2.get(obj)) //content
// console.log(map2) //Map { { name: '黄金鑫' } => 'content' }




// Map传参的本质
const items = [
    ['name', '张三'],
    ['title', 'Author']
];

const map = new Map();
items.forEach(
    ([key, value]) => map.set(key, value)
);
console.log(map)
for(let i of map){
    console.log(i)
}


// 数组转化为对象
// let arr = [["name","哈哈"],["age", 21]]
// let o = {}
// arr.forEach(([key,value])=>{
//     o[key] = value
// })
// console.log(o)