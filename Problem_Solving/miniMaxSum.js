const { Console } = require("console");

const arr = [5, 5, 5, 5, 5]

function aVeryBigSum(arr) {
  let sum = arr[0];

  for (let i = 0; i < arr.length; i++)
    if (typeof arr[i+1] !== 'undefined') sum += arr[i+1]
    
  return sum
}


function miniMaxSum(arr) {
  let minSum = aVeryBigSum(arr)
  let maxSum = 0

  for (let i = 0; i < arr.length; i++) {
    let sumTested = aVeryBigSum(arr.filter((el, index) => index !== i))
    if (maxSum <= sumTested) maxSum = sumTested
    if (minSum >= sumTested) minSum = sumTested
  }

  console.log(minSum, maxSum)
}

miniMaxSum(arr)