let arr = [1, 2, 3, 4, 4, 5, 5, 6]


function foo(arr) {
    let arr2 = []
    arr2[0] = arr[0]
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if(arr[i] === arr2[j]){
                break
            }

            if(j === arr2.length -1){
                arr2.push(arr[i])
            }
        }
    }
    return arr2
}

arr = foo(arr)
console.log(arr)