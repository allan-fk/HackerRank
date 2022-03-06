const a = 35
const b = 70

function squares(a, b) {
  let i = 1
  let perfectSquares = 0

  while(i*i < a)i++;
  while(i*i <= b){
    perfectSquares++;
    i++;
  }
  return perfectSquares
}
squares(a, b)