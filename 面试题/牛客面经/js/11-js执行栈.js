function foo1(){
    console.log(1)
    foo2()
    console.log(3)
    foo3()
}

function foo2(){
    console.log(2)
}

function foo3(){
    console.log(4)
}



foo1()
/**
 * 1
 * 2
 * 3
 * 4
 */
