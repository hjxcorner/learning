
let obj = {
    name: "yy"
}

// function foo(){
//     let name = "hjx"
//     console.log(this.name)
// }

// foo.call(obj) // yy
// foo.apply(obj) // yy
// let foo2 = foo.bind(obj) 
// foo2() // yy


function foo(age,sex) {
    let name = "hjx"
    console.log(this.name,age,sex)
}

foo.call(obj,21,"男") // yy 21 男
foo.apply(obj,[21,"男"]) // yy 21 男
let foo2 = foo.bind(obj,21,"男") // yy 21 男
foo2()