// https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem

const c = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0]
const k = 3

function jumpingOnClouds(clouds, jump) {
  let energy = 100
  
  let i = 0
  while (i !== clouds.length) {
    while (i < clouds.length) {
      energy--
      if (clouds[i] == 1) energy -= 2
      i+=jump
    }
    if (i !== clouds.length) i -= clouds.length
  }
    
  return energy
}

jumpingOnClouds(c, k)
