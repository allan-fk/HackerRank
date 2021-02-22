// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

const start = 13
const end = 45
const divid = 3

function beautifulDays(start, end, divid) {
  let beautifulDays = 0
  let day = start

  while(day < end+1) {
    let reverse = (num) => parseInt(String(num)
    .split("")
    .reverse()
    .join(""), 10)

    if ((day - reverse(day)) / divid  % 1 === 0)  beautifulDays++
    day++
  }

  return beautifulDays
}


console.log(
  beautifulDays(start, end, divid)
)