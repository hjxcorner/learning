
function foo(P, option, arr1) {
    let bestCount = 99
    let arr3 = arr1
    for (let i = 0; i < option - 1; i++) {
        for (let j = i + 1; j < option; j++) {
            if (arr3[i] < arr3[j]) {
                let tem = arr3[i]
                arr3[i] = arr3[j]
                arr3[j] = tem
            }
        }
    }

    for (let n = 0; n < option; n++) {
        let p = P
        let i = n
        let j = 0
        let arr2 = []//用于记录最优解
        let isFind = false
        while (!isFind) {
            if (p > arr3[i]) {
                arr2[j] = i
                j++
                p = p - arr3[i]
            } else if (p < arr3[i]) {
                i++
            } else if(p === arr3[i]){
                arr2[j] = i
                isFind = true
                if (arr2.length < bestCount) {
                    bestCount = arr2.length
                }
            } else {
                console.log(Impossible)
            }
        }
    }
    console.log(bestCount)
}

let P = 65 //价格
let option = 4 //代金卷种类
let arr1 = [30, 50, 20, 5] //每种代金卷的金额 先假设是从小到大排列
foo(P, option, arr1)