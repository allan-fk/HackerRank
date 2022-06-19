const integers = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
  let negative = 0
  let positive = 0
  let zero = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0 ) zero++
    else if (arr[i] > 0 ) positive++
    else negative++
  }

  [positive, negative, zero].map(el => console.log(Math.round(el/arr.length * 1e6) /1e6))
}

console.log(plusMinus(integers))