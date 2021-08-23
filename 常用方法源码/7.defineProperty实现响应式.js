/**
 * 缺点：
 *      1. 无法监听新增属性和删除属性
 *      2. 深度监听需要一性递归
 *      3. 无法原生监听数组，需要特殊处理
 */



//视图更新
function updateView() {
    console.log("视图更新了")
}


let oldArrayProperty = Array.prototype
let myArrayProperty = Object.create(oldArrayProperty); // 创建一个新对象继承数组原型

["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(methodName => {
    myArrayProperty[methodName] = function () {
        updateView() //触发视图更新
        oldArrayProperty[methodName].call(this, ...arguments)  //调用真正的数组方法        
    }
}); 

// 深层次监听对象值的变化
function difineReactive(target, key, value) {
    observe(value) // 对对象的深度监听
    // 核心API
    Object.defineProperty(target, key, {
        get() {
            return value
        },
        set(newValue) {
            if (newValue !== value) {
                value = newValue
                updateView()
            }
        }
    })
}

// 监听对象值的变化
function observe(target) {
    if (typeof target != "object" || target === null) {
        console.log(target);
        return
    }

    if (Array.isArray(target)) {
        target.__proto__ = myArrayProperty
    }

    for (let key in target) {
        difineReactive(target, key, target[key])
    }
}


let o = {
    name: "hjx",
    age: 21,
    info: {
        address: "江西"
    },
    friends: [{a:'b'}, 2, 3]
}
observe(o)

// o.name = "yy"
// o.age = 22
// o.info.address = "上海"
// o.age = 23
// o.friends.push({a: 'b'})
// o.friends[3].a = 'c'
// o.friends[0].a = 'c'
// console.log(o.friends)
console.log(o)
