/**
 * 先用sor将数组排好序（按升序排列数组项，他会调用每个数组项的toString()方法，然后比较得到的字符串以确定如何排序。）,
 * 再比较相邻的元素是否相等
 */

let arr = [undefined, undefined, 1, '1', null, NaN, "NaN", NaN, true, true, false, false, {}, {}, [], []]

function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log("type error!")
        return
    }

    arr.sort()
    let newArr = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] !== arr[i - 1]){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(unique(arr))

