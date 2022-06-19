const steps = 10
//const path = 'UDDDUDUU' // 1
//const path = 'DDUUDDUDUUUD' // 2
const path = 'UDUUUDUDDD' // 0

function countingValleys(steps, path) {
  let seaLevel = 0
  let nbrValley = 0

  /*path.split('').map((el, i) => {
    console.log(seaLevel)

    el === 'D' ? seaLevel-- : seaLevel++
    if (seaLevel == 0) nbrValley++
    if (seaLevel == 0 ) console.log('ici')
  })*/

  //console.log(path.length)

  for (let i = 0; i < path.length; i++) {
    path[i] === 'D' ? seaLevel-- : seaLevel++
    console.log(seaLevel)
    if (seaLevel == 0 && i < path.length-1) nbrValley++
    if (seaLevel == 0 && i < path.length-1) console.log('ici')
  }
  console.log(nbrValley)
}

countingValleys(steps, path)