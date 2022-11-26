/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let n = matrix.length
  let temp = new Array(n).fill().map(() => new Array(n).fill(0))
  for (let i = 0; i<n; i++) {
    for (let j = 0; j<n; j++) {
      temp[j][n-i-1] = matrix[i][j]
    }
  }
  for (let i = 0; i<n; i++) {
    for (let j = 0; j<n; j++) {
      matrix[i][j] = temp[i][j]
    }
  }
};
