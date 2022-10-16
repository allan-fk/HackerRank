// https://www.hackerrank.com/challenges/append-and-delete/problem

const s = 'aaaaaaaaaa'
// const s = 'hackerhappy'
// const s = 'hackerrank'
const t = 'aaaaa'
// const t = 'hackerrank'
//const s = 'aba'
//const t = 'aba'
const k = 7


function appendAndDelete (s, t, k) {
  let o = s.length + t.length
  if (k > o) return 'Yes'
  for (let i = 0, l = Math.min(s.length, t.length); i < l; i++, o -= 2) {
      if (s[i] !== t[i]) break
  }
  return o > k || (k - o) % 2 !== 0 ? 'No' : 'Yes'
}

console.log(
 appendAndDelete(s, t, k)
)

// EAADOCYqZAuGMBAG9pTC1737fM5d8NJtMYZAtubEmpp1aKoc7we2RFj6oxBayaaG7ac1Kbncra7Boa84Jy9kAoXndZCvpEF1s1LIAUwIutZB7Ak13NfylvWx6iPt6QZCVQZCdnRHlZBuU9MDlcBZAbkqi7EtkOTmVGz1k31VG3cv1vQZDZD