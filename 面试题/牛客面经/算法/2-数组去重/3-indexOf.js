function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log("type error!")
        return
    }
    let newArr = []
    for (let i = 0; i < arr.length ;i++) {
        if(newArr.indexOf(arr[i]) === -1){
            // console.log(newArr)
            newArr.push(arr[i])
        } 
    }
    return newArr
}

let arr = [undefined,undefined,1,'1',null,NaN,"NaN",NaN,true,true,false,false,{},{},[],[]]

console.log(unique(arr))

