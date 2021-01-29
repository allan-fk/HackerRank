// https://www.hackerrank.com/challenges/drawing-book/problem

const n = 6
const p = 5

function pageCount(numberOfPages, pageToGo) {
  const diffFromLastPage = numberOfPages - pageToGo

  if (diffFromLastPage < pageToGo) {
    if (numberOfPages % 2 == 0 && diffFromLastPage == 1) return 1 
    else Math.floor(diffFromLastPage / 2)
  } else  return Math.floor(pageToGo / 2)

}

console.log(
  pageCount(n, p)
)