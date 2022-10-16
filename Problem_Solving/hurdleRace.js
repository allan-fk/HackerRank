// https://www.hackerrank.com/challenges/the-hurdle-race/problem

const heightJump = 4
const hurdles = [1, 6, 3, 3, 2]

function hurdleRace(heightJump, hurdles) {
  let highestHurdle = 0

  hurdles.forEach(hurdle => {
    if (hurdle > highestHurdle) highestHurdle = hurdle
  });

  return highestHurdle > heightJump ? Math.abs(heightJump - highestHurdle) : 0
}

console.log(
hurdleRace(heightJump, hurdles)
)