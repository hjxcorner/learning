let arr = [1,2,3,4,5,6,7,8]

function foo(arr){
    //交换次数 = 数组长度的一半
    for(let i = 0;i<arr.length/2;i++){
        replace(arr,i,arr.length - 1 - i)
    }
}

function replace(arr, i, j) {
    let tem = arr[i]
    arr[i] = arr[j]
    arr[j] = tem
}

foo(arr)
console.log(arr)


/**
 * 交换次数：数组长度的一半
 * 第一个元素与最后一个元素交换
 * 第二个元素与倒数第二个元素交换
 * .
 * .
 * .
 * 第i个元素与倒数第i个元素交换
 * 
 * 【i】  【arr.length - 1 -i】
 */