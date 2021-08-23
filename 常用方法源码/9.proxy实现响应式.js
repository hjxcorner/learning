/**
 * proxy的一些问题：
 *  1. get，set触发多次
 *  2. 
 */


const data = {
  name: '黄金鑫',
  age: 21,
  info: {
    name: 'yy'
  },
  friends: ['yy', 'ss']
}

function reactive(target) {
  if (typeof target !== 'object' || target === null) {
    return target
  }

  const proxyConfig = {
    get(target, key, receiver) {
      // 只处理非原型的属性
      const ownKeys = Reflect.ownKeys(target)
      if (ownKeys.includes(key)) {
        console.log('get:' + key)
      }

      const ret = Reflect.get(target, key, receiver)
      return reactive(ret) // 深度监听
    },
    set(target, key, val, receiver) {
      // 重复数组不做处理
      if (val === target[key]) return true
      const ownKeys = Reflect.ownKeys(target)
      if (ownKeys.includes(key)) {
        console.log('已有的key')
      } else {
        console.log('新增的key')
      }
      const ret = Reflect.set(target, key, val, receiver)
      console.log('set:' + key)
      // console.log('ret:' + ret)
      return ret
    },
    deleteProperty(target, key) {
      const ret = Reflect.deleteProperty(target, key)
      console.log('deleteProperty:' + key)
      console.log('ret:' + ret)
      return ret
    }
  }

  const proxyData = new Proxy(target, proxyConfig)
  return proxyData
}

let reactiveData = reactive(data)
reactiveData.friends[0] = 'yyy'
reactiveData.friends.push('杨滢')
console.log(reactiveData)