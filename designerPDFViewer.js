// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

const h = [1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,7]
const word = 'zaba'

function designerPdfViewer(h, word){
  let letterHeights = []
  let tallestLetter = 0

  word.split('').forEach(letter => {
    letterHeights.push(h[letter.charCodeAt(0) - 97])
  });

  letterHeights.forEach(height => {
    if(height > tallestLetter) tallestLetter = height
  })

  return tallestLetter * letterHeights.length
}

console.log(
  designerPdfViewer(h, word)
)