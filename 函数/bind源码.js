Function.prototype.mybind = function(obj){
    let _this = this
    return function(){
        return _this.apply(obj,arguments)
    }
}
