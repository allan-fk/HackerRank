// https://www.hackerrank.com/challenges/sock-merchant/problem

const n = 9
// const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
const ar = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]


function sockMerchant(n, socks) {
  let pairs = []
  let count = 0

  socks.forEach(sock => {
    if (pairs.includes(sock)) {
      count++
      pairs.splice(pairs.indexOf(sock), 1)
    }
    else pairs.push(sock)
  });

  return count
}

console.log(
sockMerchant(n, ar)
)