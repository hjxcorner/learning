async function fn(){
    let a = await setTimeout(()=>{console.log("hh")},2000)
    console.log(a)
}

fn()