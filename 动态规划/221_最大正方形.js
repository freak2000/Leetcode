var maximalSquare = function(matrix) {
  let m = matrix.length
  let n = matrix[0].length
  let dp = new Array(m).fill([]).map(() => new Array(n).fill(0))
  let ans = 0
  for (let i = 0; i<m; i++) {
    if (+matrix[i][0]) ans = 1
    dp[i][0] = +matrix[i][0]
  }
  for (let j = 0; j<n; j++) {
    if (+matrix[0][j]) ans = 1
    dp[0][j] = +matrix[0][j]
  }
  for (let i = 1; i<m; i++) {
    for (let j = 1; j<n; j++) {
      if(matrix[i][j]!=='0') {
        dp[i][j] = Math.min(dp[i-1][j], Math.min(dp[i-1][j-1], dp[i][j-1])) + 1
        if (dp[i][j]>ans) {
          ans = dp[i][j]
        }
      }
    }
  }
  return ans*ans
};
