let str = "get-element-by-id"

function foo(str){
    let arr = str.split("-")
    let str2 = ""
    for(let i = 0;i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
        // arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1,arr[i].length - 1)
        // arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1)
        str2 += arr[i]
    }
    return str2
}

console.log(foo(str))  