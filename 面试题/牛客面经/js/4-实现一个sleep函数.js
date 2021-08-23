/**
 * 延迟、等待一段时间再执行的函数，如：过几分钟去检测某一事件是否发生
 */


 function sleep(time){
    return new Promise((resolve,reject) =>{
        setTimeout(resolve,time)
    })
 }

 sleep(2000).then(()=>{
     console.log("sleep函数执行了")
 })

