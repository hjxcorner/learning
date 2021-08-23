let arr = [1, 2]

if (arr instanceof Array) {
    console.log(arr)
    /*
        种方法存在的问题:
            它假定只有一个全局执行环境。如果网页中包含多个框架，那么就存在两个以上不同的执行环境
            从而存在两个以上不同版本的Array构造函数，如果从一个框架向另一个框架传入一个数组，那么
            传入的数组就跟第二个框架中原生创建的数组分别具有各自不同的构造函数。
    */
}

if (Array.isArray(arr)) {

    /**
    * 有兼容性问题 ie9+ chrome safari 10.5+ opera 5+ 可用
    */
    console.log(arr)
}

function isArray(value){
    return Object.prototype.toString.call(value) //检测别的类型也可用这个方法

    /**
     * 在任何值上调用Object原生的tostring()方法，都会返回一个[object NativeConstructorName]格式的字符串。
     * 每个类在内部都有一个[[Class]]属性，这个属性中就指定了上述字符串中的构造函数名。
     */
}

console.log(isArray(arr)) // [object Array]
console.log(isArray("abc"))


