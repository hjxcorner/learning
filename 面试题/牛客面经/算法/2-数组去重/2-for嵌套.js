


let arr = [undefined,undefined,1,'1',null,NaN,"NaN",NaN]
/**
 * 普通方法
 */
function fn(arr, arr2 = []) {
    arr2.push(arr[0])
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr[i] === arr2[j]) {
                break
            }
            else {
                arr2.push(arr[i])
                break
            }
        }
    }
    return arr2
}


let arr2 = fn(arr)
console.log(arr2)