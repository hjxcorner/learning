let arr = [1, 2, 3]

function foo (arr) {
  for(let i = 0; i < arr.length; i += 1 ) {
    setTimeout(() => {
      console.log(arr[i]);
    }, i === 0 ? arr[i] * 1000 : arr[0] * 1000 + arr[i] * 1000);
  }
}

foo(arr);
