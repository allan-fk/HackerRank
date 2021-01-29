// https://www.hackerrank.com/challenges/drawing-book/problem

const n = 6
const p = 5

function pageCount(lastPage, pageToGo) {
  const diffFromLastPage = lastPage - pageToGo

  if (diffFromLastPage < pageToGo)
    return (lastPage % 2 == 0 && diffFromLastPage == 1) 
    ? 1 
    : Math.floor(diffFromLastPage / 2)
  else return Math.floor(pageToGo / 2)
}

console.log(
  pageCount(n, p)
)