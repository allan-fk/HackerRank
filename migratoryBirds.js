// https://www.hackerrank.com/challenges/migratory-birds/problem

const birds = [1, 4, 4, 4, 5, 3]

function migratoryBirds(birds) {

  let birdsSort = []
  let max = { type: 0, number: 0 }

  birds.forEach(bird => {
    birdsSort[bird] ? birdsSort[bird]++ :  birdsSort[bird] = 1
  })

  birdsSort.forEach((nbrBirds, i) => {
    if (nbrBirds > max.number) max = { type: i, number: nbrBirds} 
  })

  return max.type
}

migratoryBirds(birds)
