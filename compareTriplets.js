const alice = [17, 28, 30]
const bob = [99, 16, 8]

function compareTriplets(a, b) {
  //implement your code here using input array
  let alicePoints = 0;
  let bobPoints = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      if (a[i] > b[i]) alicePoints++
      if (a[i] > b[i]) bobPoints++
    }
  }
  //return [alicePoints, bobPoints]
  console.log([alicePoints, bobPoints])
}

compareTriplets(alice, bob)