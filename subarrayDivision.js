// https://www.hackerrank.com/challenges/the-birthday-bar/problem

const squaresOfhocolate =  [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1,], birthDay = 18, birthMonth = 7

function birthday(s, d, m) {
  let nbrOfPossibilities = 0

  s.map((square, i) => {
    let sum = 0
    for (let c = 0; c < m && s[i + c]; c++) {
      sum += s[i + c]
    }
    sum == d && nbrOfPossibilities++
  })

  return nbrOfPossibilities
}

birthday(squaresOfhocolate, birthDay, birthMonth)
