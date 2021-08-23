// let arr1 =[12,5,7]

// let arr2 = arr1.map(function (item){
//     return item*2
// })
// console.log(arr2)

// let arr3 = [44,55,90,60]

// let arr4 = arr3.map(function (item){
//     return item >= 60 ? "及格" : "不及格"
// })

// console.log(arr4)

// map函数的返回值为和原数组等长的新数组，数组的每一个元素为map回调函数的返回值

let arr5 = [
    {name:"zhangsan", score: 80},
    {name:"lisi", score: 90},
    {name:"wangwu", score: 100},
    {name:"zhaoer", score: 69},
    {name:"jinliu", score: 88}
]

let arr6 = arr5.map(function (item){
    return {name:item.name, isGood: item.score > 85 ? "优秀" : "及格"}
})

console.log(arr6)