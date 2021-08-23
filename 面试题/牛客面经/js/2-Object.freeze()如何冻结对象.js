 
function myFreeze(obj) {
    if (obj instanceof Object) {
        Object.seal(obj);
        let p;
        for (p in obj) {
            if (obj.hasOwnProperty(p)) {
                Object.defineProperty(obj, p, {
                    writable: false
                });
                myFreeze(obj[p]);// 递归，实现更深层次的冻结
            }
        }
    }
}