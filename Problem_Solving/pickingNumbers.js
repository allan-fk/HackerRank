// https://www.hackerrank.com/challenges/picking-numbers/problem

const a = [4, 6, 5, 3, 3, 1]

function pickingNumbers(a) {
  let maxcount = 0;
  [...new Set(a)].forEach(x => {
      maxcount = Math.max(maxcount,
          a.reduce((c, v) => c += (v === x || v === x + 1), 0));
  })
  return maxcount;
}


console.log(
  pickingNumbers(a)
)