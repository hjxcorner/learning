// const p1 = new Promise((resolve, reject) => {
//     resolve('hello');
// })
//     .then(result => result)
//     .catch(e => e);

// const p2 = new Promise((resolve, reject) => {
//     throw new Error('报错了');
// })
//     .then(result => result)
//     .catch(e => e);

// Promise.all([p1, p2])
//     .then(result => console.log(result))
//     .catch(e => console.log(e));
// ["hello", Error: 报错了] //说明这里执行的是 Promise.all的then方法


//   如果p2没有catch方法 那么错误会传递给后面的catch方法 这会导致 Promise.all调用catch方法be

const p1 = new Promise((resolve, reject) => {
    resolve('hello');
})
    .then(result => result)
    .catch(e => e);

const p2 = new Promise((resolve, reject) => {
    throw new Error('报错了');
})
    .then(result => result)
    // .catch(e => e);

Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(e => console.log(e));

    // Error: 报错了