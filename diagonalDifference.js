const squareArr = [[1,2,3],[4,5,6],[9,8,9]]

function aVeryBigSum(ar) {
  let sum = ar[0];
  for (let i = 0; i < ar.length; i++) {
    if (typeof ar[i+1] !== 'undefined') {
      sum += ar[i+1]
    }
  }
  return sum
}


function diagonalDifference(arr) {
  let nbrOfLines = arr[0].length
  let sum = 0;
  
  let leftRightDiagonal = [];
  for (let i = 0; i < nbrOfLines; i++) {
    leftRightDiagonal.push(arr[i][i])
  }

  let rightLeftDiagonal = [];
  for (let i = 0; i < nbrOfLines; i++) {
    rightLeftDiagonal.push(arr[i][nbrOfLines-(i+1)])
  }

  console.log(rightLeftDiagonal)

  if (aVeryBigSum(leftRightDiagonal) > aVeryBigSum(rightLeftDiagonal))
    sum = aVeryBigSum(leftRightDiagonal) - aVeryBigSum(rightLeftDiagonal)
  else
    sum =aVeryBigSum(rightLeftDiagonal) - aVeryBigSum(leftRightDiagonal)

  return sum
}

diagonalDifference(squareArr)