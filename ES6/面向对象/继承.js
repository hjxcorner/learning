class People{
    constructor(name, sex){
        this.name = name
        this.sex = sex
    }

    eat(){
        console.log("您吃饭了吗？")
    }
}


class Man extends People{
    constructor( name, age, sex = "男"){
        super(name, sex) //这里必须执行才能将参数传递给超类
        this.age = age
    }

    //重写父类方法
    eat(){
        console.log("嘿伙计，你吃饭了吗?")
    }

    marry(){
        console.log("结婚")
    }
}


let tom =  new Man("Tom",21)
console.log(tom.name, tom.sex, tom.age)
tom.eat()
tom.marry()