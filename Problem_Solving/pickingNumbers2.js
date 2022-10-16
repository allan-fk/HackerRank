// https://www.hackerrank.com/challenges/picking-numbers/problem

const a = [4, 6, 5, 3, 3, 1]
//const a = [1, 2, 2, 3, 1, 2]

function pickingNumbers(a) {
  // Write your code here
  let pickingNumbers = []

  a.forEach(((number, i) => {
  //console.log(pickingNumbers)
    if (i == 0) pickingNumbers.push(
        {
          firstNumber : number,
          secondNumber : 0,
          numbers : [number]
        }
      )
    else {
      const findIndex = pickingNumbers.findIndex(obj => 
        obj.firstNumber == number
        || obj.secondNumber == number
        || obj.secondNumber == 0 
        && (obj.firstNumber++ == number 
          || obj.firstNumber-- == number)
      )
      
      if (findIndex !== -1) {
          pickingNumbers[findIndex].numbers.push(number)

        if (pickingNumbers[findIndex].firstNumber !== number
          && pickingNumbers[findIndex].secondNumber == 0)
          pickingNumbers[findIndex].secondNumber = number
      }
      else pickingNumbers.push(
        {
          firstNumber : number,
          secondNumber : 0,
          numbers : [number]
        }
      )
    }
  }))

  console.log(pickingNumbers)
}

console.log(
  pickingNumbers(a)
)