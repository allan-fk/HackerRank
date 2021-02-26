// hackerrank.com/challenges/permutation-equation/problem

const p = 

function permutationEquation(p) {
  for (let i = 1; i <= nbrOfRotations; i++) array.unshift(array.pop());
  return queries.map(e => (array[e]))
}

console.log(
  permutationEquation(p)
)