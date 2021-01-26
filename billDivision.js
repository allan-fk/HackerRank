// https://www.hackerrank.com/challenges/bon-appetit/problem
const bill = [3, 10, 2, 9]
const k = 1
const b = 12

function bonAppetit(bill, k, b) {
  let totalCost = 0
  bill.forEach((item, i) => {
    if (i !== k) {
      totalCost += item
    }
  });
  if (totalCost / 2 == b)
    console.log('Bon Appetit')
  else if (totalCost / 2 > b)
    console.log((totalCost / 2) - b)
  else console.log(b - (totalCost / 2))
}

bonAppetit(bill, k, b)