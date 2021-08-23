let arr1 =[12,69,180, 8763, 100, 22, 33, 99, 15]

let arr2 = arr1.forEach((item, index)=> {
    if(item == 100){
        console.log(index + ":" + item)
    }
})

console.log(arr2)