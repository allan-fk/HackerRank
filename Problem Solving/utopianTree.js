// https://www.hackerrank.com/challenges/utopian-tree/problem

const n = 4

function utopianTree(n) {
  let i =  0
  let h = 1

  while (i < n) {
    if (i%2) h++
    else h*=2
    i++
  }
  return h
}


console.log(
  utopianTree(n)
)