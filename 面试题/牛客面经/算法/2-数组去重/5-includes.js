/**
 * 
 */

let arr = [undefined, undefined, 1, '1', null, NaN, "NaN", NaN, true, true, false, false, {}, {}, [], []]

function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log("type Error")
        return
    }
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if(!newArr.includes(arr[i])){
             newArr.push(arr[i])
        }
    }

    return newArr
}
console.log(unique(arr))