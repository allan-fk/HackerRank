const x1 = 0, v1 = 3, x2 = 4, v2 = 2

function kangaroo(x1, v1, x2, v2) {
  return v1 > v2 && (x1 - x2) % (v2 - v1) == 0 ? 'YES' : 'NO'
}

kangaroo(x1, v1, x2, v2)