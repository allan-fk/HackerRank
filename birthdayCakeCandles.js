candles = [3, 2, 1, 3]

function birthdayCakeCandles(candles) {
  let tallestCandles = 0
  let maxHeightCandle = 0

  candles.map(el => el > maxHeightCandle && (maxHeightCandle = el))
  candles.map(el => el == maxHeightCandle && tallestCandles++)

  return tallestCandles
}

birthdayCakeCandles(candles)