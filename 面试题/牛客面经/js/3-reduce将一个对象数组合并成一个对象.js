let objArr = [
    {
        name: "hjx"
    },
    {
        age: 21
    },
    {
        sex: "男"
    }
]


let newObj =
    objArr.reduce((prev, cur, index, array) => {
        // console.log(prev, cur, index)
        for (let key in prev) {
            cur[key] = prev[key]
        }
        return cur
    })

    console.log(newObj)