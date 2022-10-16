const arr = [10, 15, 3, 7];
const k = 17;

const check_sums = (arr, k) => {
  for (let i = 0; i < arr.length; i++)
    for (let y = 0; y < arr.length; y++)
      if (y !== i && arr[i] + arr[y] === k) return true
  return false
}

check_sums(arr , k)