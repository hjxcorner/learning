Function.prototype.myBind = function(obj, ...ags){
  let _this = this
  return function(){
      return _this.apply(obj, ags)
  }
}


function foo(a,b,c) {
  console.log(this)
  console.log(a,b,c)
}

let obj = {
  a: '1',
  b: '2',
  c: '3'
}

foo.myBind(obj, 1, 2, 3)()