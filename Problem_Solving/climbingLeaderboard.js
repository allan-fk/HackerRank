// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem

const scores = [100, 100, 100, 50, 40, 40, 20, 10]
const player = [5, 25, 50, 120]


function climbingLeaderboard(scores, player) {
  let leaderboard = []
  let playerRank = []

  scores.forEach((score, i) => {
    isMultipleSameScore = leaderboard.some(e => e[0] && e.includes(score))

    if (!leaderboard.includes(score) && !isMultipleSameScore) {
      leaderboard.push(score)
    }
    else if(!isMultipleSameScore) {
      let indexOfScore = leaderboard.indexOf(score)
      leaderboard.splice(indexOfScore, 1, [score, score])
    }
    else {
      leaderboard.map((e, i) => 
        e[0] && e[0] == score && leaderboard[i].push(score)
      )
    }
  });

  player.forEach(score => {
    leaderboard.includes(score) && playerRank
  })

  console.log(leaderboard)
}

console.log(
  climbingLeaderboard(scores, player)
)