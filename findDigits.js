// https://www.hackerrank.com/challenges/find-digits/problem

const n = 1024

function findDigits(n) {
  let result = 0
  Array.from(String(n), Number).forEach(el => {
    if(n % el == 0) result++
  })
  return result
}

findDigits(n)