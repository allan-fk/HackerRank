// https://www.hackerrank.com/challenges/angry-professor/problem?h_r=next-challenge

const k = 2
const a = [0, -1, 2, 1]

function angryProfessor(k, a) {
  let studentPresent = 0

  a.forEach(h => {
    h <= 0 && studentPresent++
  });

  return studentPresent < k ? 'YES' : 'NO'
}

console.log(
  angryProfessor(k, a)
)