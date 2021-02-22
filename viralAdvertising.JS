// https://www.hackerrank.com/challenges/strange-advertising/problem

const n = 4

function viralAdvertising(days) {
  let likes = 2
  let shared = 5
  let totalLikes = 0 

  for (let day = 0; day < days; day++) {
    likes =  Math.floor(shared/2)
    shared = likes * 3
    totalLikes += likes
  }

  return totalLikes
}

console.log(
  viralAdvertising(n)
)