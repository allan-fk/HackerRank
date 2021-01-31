// https://www.hackerrank.com/challenges/magic-square-forming/problem

const s = [[5, 3, 4], [1, 5, 8], [6, 4, 2]]

function cubeComp(cube, start, mirror) {
  const magic = mirror ? [4, 3, 8, 1, 6, 7, 2, 9] : [4, 9, 2, 7, 6, 1, 8, 3];
  let sum = 0;

  for(let i = 0; i < 8; i++)
    sum += Math.abs(cube[i] - magic[(i + start * 2) % 8]);
  return sum;
}

function formingMagicSquare(s) {
  const cube = s[0].concat([s[1][2]], s[2].reverse(), [s[1][0]]);
  let min = 81;

  for(let i = 0; i < 8; i++)
    min = Math.min(min, cubeComp(cube, i % 4, i / 4 >= 1));
  return min + Math.abs(5-s[1][1]);
}

console.log(
  formingMagicSquare(s)
)