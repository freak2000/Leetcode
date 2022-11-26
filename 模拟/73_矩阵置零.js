/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let m = matrix.length
  let n = matrix[0].length
  let temp = new Array(m).fill().map(() => new Array(n))
  for (let i = 0; i<m; i++) {
    for (let j = 0; j<n; j++) {
      temp[i][j] = matrix[i][j]
    }
  }
  let bian = (i, j) => {
    if (!temp[i][j]) {
      for (let y = 0; y<m; y++) {
        matrix[y][j] = 0
      }
      for (let x = 0; x<n; x++) {
        matrix[i][x] = 0
      }
    }
  }
  for (let i = 0; i<m; i++) {
    for (let j = 0; j<n; j++) {
      if (!matrix[i][j]) {
        bian(i, j)
      }
    }
  }
};
