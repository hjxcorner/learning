let str = "?name=hjx&age=21&sex=0"

function getQueryStr(str) {

    let qs = str.slice(1)

    let arr = qs.split("&")
    //console.log(arr) // [ 'name=hjx', 'age=21', 'sex=0' ]
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        let arr2 = arr[i].split("=")
        obj[arr2[0]] = arr2[1]
    }

    return obj

}

let obj = getQueryStr(str)
console.log(obj)