/*
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
*/