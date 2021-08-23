let obj = {
  age: 21
}

let obj2 = new Proxy(obj, {
  get(target, key){
    return  target[key] + 1
  },
  set(target, key, val){
    return target[key] = val + 2
  }
})

obj2.age = 10
console.log(obj2.age + obj.age)