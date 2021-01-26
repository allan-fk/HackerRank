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
    return 'Bon appetit'
  else if (totalCost / 2 > b)
    return (totalCost / 2) - b
  else return b - (totalCost / 2)
}

console.log(
  bonAppetit(bill, k, b)
) 