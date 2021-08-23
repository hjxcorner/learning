let arr = [undefined, undefined, 1, '1', null, NaN, "NaN", NaN, true, true, false, false, {}, {}, [], []]

let arr2 = arr.filter((item,index,arr)=>{
    return arr.indexOf(item,0) === index
})

console.log(arr2)


console.log(arr.indexOf(NaN))