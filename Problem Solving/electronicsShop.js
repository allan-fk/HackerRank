// https://www.hackerrank.com/challenges/electronics-shop/problem

const budget = 10
const keyboardPrices = [3, 1]
const drivePrices = [5, 2, 8]

function getMoneySpent(keyboardPrices, drivePrices, budget) {
  let expensiveOption = 0

  keyboardPrices.forEach(keyboard => {
    drivePrices.forEach(drive => {
      const option = drive + keyboard
      if (option > expensiveOption && option <= budget) expensiveOption = option
    }) 
  })

  return expensiveOption > 0 ? expensiveOption : -1
}

console.log(
  getMoneySpent(keyboardPrices, drivePrices, budget)
)