/**
 * 
 * {} 单一括号匹配
 */

function foo(str) {
  let arr = []
  for (let i = 0; i < str.length; i++) {
    if(str[i] === '{') arr.push(str[i])
    if(str[i] === '}' && arr.length > 0) arr.pop()
  }
  return arr.length > 0 ? false : true
}

console.log(foo('{}}{{{{}}}{}'))

