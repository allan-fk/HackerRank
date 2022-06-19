const grades = [73, 67, 38, 33]

const s = 7, t = 11, a = 5, b = 15, apples = [-2, 2, 1], oranges = [5, -6]


function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const startHouseLocation = s
  const endHouseLocation = t
  const appleTreeLocation = a
  const orangeTreeLocation = b
  const distancesApplesFromTree = apples
  const distancesOrangesFromTree = oranges
  let nbrOfApplesInHouse = 0
  let nbrOfOrangesInHouse = 0

  distancesApplesFromTree.map(distanceAppleFromTree => {
    const appleLocation = appleTreeLocation + distanceAppleFromTree
    if (appleLocation >= startHouseLocation 
      && appleLocation <= endHouseLocation)
      nbrOfApplesInHouse++
  })

  distancesOrangesFromTree.map(distanceOrangeFromTree => {
    const orangeLocation = orangeTreeLocation + distanceOrangeFromTree
    if (orangeLocation >= startHouseLocation 
      && orangeLocation <= endHouseLocation)
      nbrOfOrangesInHouse++
  })

  console.log(nbrOfApplesInHouse, nbrOfOrangesInHouse)
}

countApplesAndOranges(s, t, a, b, apples, oranges)