function findLCM(a, b) {
  let multipleA = a
  let multipleB = b
  let lcm = 0
  while (multipleA != multipleB) {
      if (multipleA > multipleB) multipleB+=b    
      else if (multipleA < multipleB) multipleA+=a
  }
  return multipleA
}

function findGCD(a, b) {
  let divisorA = 0
  let gcd = 0

  if (a == b) gcd = a
  else while (divisorA !== a) {
    if (a % divisorA == 0) divisorA++
    else while (a % divisorA  != 0) divisorA++
    if (b % divisorA == 0) gcd = divisorA
  }
  return gcd
}

a = [2, 4]
b = [16, 32, 96]

function getTotalX(a, b) {
  let validCount = 0;
  
  for (let x = 1; x <= 100; x++)
    if (a.every(int => (x % int == 0)) && b.every(int => (int % x == 0)))
      validCount++;

  return validCount;
}

console.log(getTotalX(a, b))