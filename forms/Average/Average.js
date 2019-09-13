let numbers = [34, 56, 117, 324, 183, 231, 72, 111, -10, 207]
const numSum = numbers.reduce((a,b) => a + b, 0)
const numAvg = numSum/numbers.length
console.log(numAvg)
let ask = prompt('Would you like to take: average or sum?(write as shown)')

switch (ask){
case 'average':
  alert(`The average of the 10 numbers is ${numAvg}`)
  break;
case 'sum':
  alert(`The sum of the 10 numbers is ${numSum}`)
  break;
}
