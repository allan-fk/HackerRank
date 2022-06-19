const ar = [ 1, 2, 3]

function aVeryBigSum(ar) {
  let sum = ar[0];

  for (let i = 0; i < ar.length; i++)
    if (typeof ar[i+1] !== 'undefined') sum += ar[i+1]
    
  return sum
}

aVeryBigSum(ar)