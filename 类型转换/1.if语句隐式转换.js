/**
 * 0,””(空字符串), null, undefined, NaN 会转换成false 其它都会转换成true
 */

var a
var b = ""
var c = null

if(0){
    console.log(1)
}

if(a){
    console.log(2)
}

if(b){
    console.log(3)
}

if(c){
    console.log(4)
}

if(!0){
    console.log(1)
}

if(!a){
    console.log(2)
}

if(!b){
    console.log(3)
}

if(!c){
    console.log(4)
}



