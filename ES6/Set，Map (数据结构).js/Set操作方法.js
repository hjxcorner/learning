let set = new Set([1,1,2,3,3,4,4,5,5])
console.log(set) // Set { 1, 2, 3, 4, 5 }

/**
 * Set容器的一些方法和属性
 */

//add用于添加一个元素
set.add(3) 
set.add(0) 
console.log(set) // Set { 1, 2, 3, 4, 5, 0 }

//has用于判断是否存在某元素
console.log(set.has(5)) // true
console.log(set.has(8)) // false

//delete用于删除某个值
console.log(set)  //Set { 1, 2, 3, 4, 5, 0 }
set.delete(1)
console.log(set)  //Set { 2, 3, 4, 5, 0 }


//clear用于清空set容器
set.clear()
console.log(set) //Set {}

//size为set容器长度
set.add(0)
console.log(set.size) // 1
