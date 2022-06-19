// https://www.hackerrank.com/challenges/append-and-delete/problem

 const s = 'aaaaaaaaaa'
 // const s = 'hackerhappy'
// const s = 'hackerrank'
 const t = 'aaaaa'
// const t = 'hackerrank'
//const s = 'aba'
//const t = 'aba'
const k = 7


function findFirstDiffPos(a, b) {
  if (a.length < b.length) [a, b] = [b, a];
  return [...a].findIndex((chr, i) => chr !== b[i]);
}

function appendAndDelete(s, t, k) {
  const firstDiffPos = findFirstDiffPos(s, t)
  console.log(firstDiffPos)
  console.log(s.length - firstDiffPos)
  console.log(t.length - firstDiffPos)

  console.log(s.length - firstDiffPos + t.length - firstDiffPos + 1)


  if (firstDiffPos == -1 && s.length * 2 + 1 == k) return 'Yes'
  // si pas de difference et efface chaque caracteres + 1 pour reecrire la meme chaine de caracteres = k
  else if (s.length - firstDiffPos + t.length - firstDiffPos == k) return 'Yes'
  // si effacer chaque caractere jusqu'au premier different et reecrire = k
  else return 'No'
}

console.log(
  appendAndDelete(s, t, k)
)

// EAADOCYqZAuGMBAG9pTC1737fM5d8NJtMYZAtubEmpp1aKoc7we2RFj6oxBayaaG7ac1Kbncra7Boa84Jy9kAoXndZCvpEF1s1LIAUwIutZB7Ak13NfylvWx6iPt6QZCVQZCdnRHlZBuU9MDlcBZAbkqi7EtkOTmVGz1k31VG3cv1vQZDZD