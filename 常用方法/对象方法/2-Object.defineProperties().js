/**
 * Object.defineProperties(obj, props):方法直接在一个对象上定义一个或多个新的属性或修改现有属性，并返回该对象。
 * 
 * 参数：
 *      obj:在其上定义或修改属性的对象。
 * 
 *      props:要定义其可枚举属性或修改的属性描述符的对象。
 * 
 * 描述符：
 *      对象中存在的属性描述符主要有两种：数据描述符和访问器描述符
 *      描述符具有以下键：
            configurable
            能否通过delete删除该属性
            默认为 false

            enumerable
            是否可枚举，是否可通过for-in循环或object.keys()返回属性
            默认为 false

            value
            与属性关联的值。可以是任何有效的JavaScript值（数字，对象，函数等）。
            默认为 undefined.

            writable
            能否修改属性的值
            默认为 false

            get
            作为该属性的 getter 函数，如果没有 getter 则为undefined。函数返回值将被用作属性的值。
            默认为 undefined

            set
            作为属性的 setter 函数，如果没有 setter 则为undefined。函数将仅接受参数赋值给该属性的新值。
            默认为 undefined
 */

 let obj = {name:"黄金鑫"}

 Object.defineProperties(obj,{
     age:{
         configurable:true,
         enumerable:true,
         value:21,
         writable:true,
        //  get,
        //  set
     }
 })

 console.log(obj) // { name: '黄金鑫', age: 21 }