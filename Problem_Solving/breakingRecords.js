const scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42] 

function breakingRecords(scores) {
  let minScore = 0, maxScore = 0, countMinScore = 0, countMaxScore = 0

  scores.map((score, i) => { 
    if (i == 0) {
      minScore = score
      maxScore = score
    } else if ( score > maxScore) {
      maxScore = score
      countMaxScore++
    }
    else if ( score < minScore) {
      minScore = score
      countMinScore++
    }
  })
  return [countMaxScore, countMinScore] 
}

breakingRecords(scores)
