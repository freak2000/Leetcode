var minFallingPathSum = function(matrix) {
  let dp = (i, j) => {
    if (i<0 || j<0 || j>=len || i>=len) {
      return Infinity
    }
    if (memo[i][j] !== -1) {
      return memo[i][j]
    }
    if (!i) {
      return matrix[i][j]
    }
    memo[i][j] = matrix[i][j]+Math.min(dp(i-1, j), Math.min(dp(i-1, j-1), dp(i-1, j+1)))
    return memo[i][j]
  }
  let len = matrix.length
  let res = Infinity
  let memo = new Array(len).fill([]).map(() => new Array(len).fill(-1))
  for (let i = 0; i<len; i++) {
    res = Math.min(dp(len-1, i), res)
  }
  return res
};
