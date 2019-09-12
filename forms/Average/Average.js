let numbers = [34, 56, 117, 324, 183, 231, 72, 111, -10, 207]
const numSum = numbers => numbers.reduce((a,b) => a + b, 0)
console.log(numSum)
let ask = prompt('Would you like to take the average or the sum?')
/*
switch (ask){
case 'average':
  alert(`
}
*/