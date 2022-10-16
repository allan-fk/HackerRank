// https://www.hackerrank.com/challenges/circular-array-rotation/problem

const array = [3, 4, 5]
const nbrOfRotations = 2
const queries = [0, 1, 2]

function circularArrayRotation(array, nbrOfRotations, queries) {
  for (let i = 1; i <= nbrOfRotations; i++) array.unshift(array.pop());
  return queries.map(e => (array[e]))
}

console.log(
  circularArrayRotation(array, nbrOfRotations, queries)
)