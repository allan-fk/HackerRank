// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

const q1 = [1, 2, 3]
const q2 = [1, 3, 2]

function catAndMouse(x, y, z) {
  const catADiff = Math.abs(x - z)
  const catBDiff = Math.abs(y - z)

  if (catADiff == catBDiff) return 'Mouse C'
  else return catADiff < catBDiff ? 'Cat A' : 'Cat B'
}

console.log(
  catAndMouse(q1[0], q1[1], q1[2])
)