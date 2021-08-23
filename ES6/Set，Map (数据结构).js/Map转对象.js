let map = new Map([
    ["name", "黄金鑫"],
    ["age", 21]
])

let obj = {}

for(let [key,value] of map){
    obj[key] = value
}

console.log(obj) // { name: '黄金鑫', age: 21 }


map.forEach(function(value, key, map) { //这里的map用来指定 this
    obj[key] = value
});

console.log(obj)