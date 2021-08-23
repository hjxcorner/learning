let arr1 =[12,69,180, 8763]

// let result =  arr1.reduce( (a,b,c) => {
//     console.log("a:" +a,"b:" + b,"c:" + c)
//     return a + b
// })
// console.log(result)

//求arr1的平均值
let ava = arr1.reduce( (tem, item, index)=>{
    if (index < arr1.length -1){
        return tem + item
    } 
    return (tem + item) / arr1.length
})

let a = arr1.reduce((a,b,c) => {
    return "hh"
})

console.log((12+69+180+8763)/4)
console.log(ava)
console.log(a)
// a: 第一次为数组的第一个元素，之后为每次回调函数的返回值
// b: 第一次为数组的第二个元素，之后为后一个元素
// c: b在数组中的下标

// reduce函数的返回值为：回调函数最后一次的返回值
