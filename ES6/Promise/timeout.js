function timeout(ms, msg) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, msg);
    });
}
console.log(
timeout(1000, 1000)
    .then(value => {
        console.log(value);
        return timeout(500, 500)
    })
    .then(value => {
        console.log(value)
        return timeout(100, 100)
    })
    .then(value => {
        console.log(value)
        return timeout(50,50)
    })
)