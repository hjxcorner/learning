setTimeout(() => { console.log("1") }, 5000)
new Promise((res, rej) => {
    console.log(2)
    setTimeout(res,4900)
}).then(() => {
    console.log(3)
    setTimeout(() => { console.log("4") }, 5000)
})


