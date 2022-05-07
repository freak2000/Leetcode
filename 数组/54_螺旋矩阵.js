/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let arr = []
  let m = matrix.length
  let n = matrix[0].length
  let min = Math.min(m, n)
  let flag = -1
  if (min%2) {
    if (m === min) {
      flag = 1
    } else {
      flag = 0
    }
  }
  let loop = Math.floor(min/2)
  let x = 0
  let y = 0
  let offset = 1
  console.log(loop)
  while(loop--) {
    let i = x
    let j = y
    for (; j<y+n-offset; j++) {
      arr.push(matrix[i][j])
    }
    for (; i<x+m-offset; i++) {
      arr.push(matrix[i][j])
    }
    for (; j>y; j--) {
      arr.push(matrix[i][j])
    }
    for (; i>x; i--) {
      arr.push(matrix[i][j])
    }
    x++
    y++
    offset+=2
  }
  if (flag === 1) {
    for (let j = y; j<=y+n-offset; j++) {
      arr.push(matrix[x][j])
    }
  } else if (!flag) {
    for (let i = x; i<=x+m-offset; i++) {
      arr.push(matrix[i][y])
    }
  }
  return arr
};
