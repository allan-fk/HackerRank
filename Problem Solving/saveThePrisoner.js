// https://www.hackerrank.com/challenges/save-the-prisoner/problem

const prisoners = 7 
const sweets = 19
const start = 2

function saveThePrisoner(prisoners, sweets, start) {
  return (sweets-1 + start) % prisoners || prisoners;
}


console.log(
  saveThePrisoner(prisoners, sweets, start)
)