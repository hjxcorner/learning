/**
 * 从小到大：每次从数组中找到一个最小/最大的元素把它放到最前面/后面
 * 
 * 
 */

let arr = [2, 4, 6, 3, 5, 9, 10]


function foo(arr) {
    let minIndex

    for (let i = 0; i < arr.length - 1; i++) {
        minIndex = i
        for (let j = i + 1; j < arr.length; j++) { 
            if(arr[j] < arr[minIndex]){ //每一次跟最小值比较
                minIndex = j
            } 
        }
        console.log(minIndex)
        exchange(arr,i,minIndex)
    }

}


function exchange(arr,i,j){
    let tem = arr[i]
    arr[i] = arr[j]
    arr[j] = tem
}

foo(arr)
console.log(arr)