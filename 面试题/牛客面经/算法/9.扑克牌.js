
let arr = [
  '1H', '1S', '1D', '1C', '2H', '2S', '2D',
  '2C', '3H', '3S', '3D', '3C', '4H', '4S',
  '4D', '4C', '5H', '5S', '5D', '5C', '6H',
  '6S', '6D', '6C', '7H', '7S', '7D', '7C',
  '8H', '8S', '8D', '8C', '9H', '9S', '9D',
  '9C', 'TH', 'TS', 'TD', 'TC', 'JH', 'JS',
  'JD', 'JC', 'QH', 'QS', 'QD', 'QC', 'KH',
  'KS', 'KD', 'KC'
]
function foo(arr) {
  let leng = arr.length;
  if(leng < 52) return 0;
  let numArr = [1,2,3,4,5,6,7,8,9,'T','J','Q','K']
  let colorArr = ['H', 'S', 'D', 'C']
  let Arr = [];
  for (let i = 0; i < numArr.length; i++) {
    for (let j = 0; j < colorArr.length; j++) {
      Arr.push(numArr[i] + colorArr[j])
    }
  }
  console.log(Arr)
  let retArr = []
  for (let i = 0; i < arr.length; i++) {
    retArr = Arr.map(item => {
      let count = 0
      for (let j = 0; j < arr.length; j++) {
       if(item === arr[j]) count++
      }
      return count;
    })
  }
  return Math.min(...retArr)
}

console.log(foo(arr))