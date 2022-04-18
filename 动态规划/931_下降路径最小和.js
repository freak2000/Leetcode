// 自顶向下方法
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

// 自底向上方法
var minFallingPathSum = function(matrix) {
  let m = matrix.length
  let n = matrix[0].length
  let dp = new Array(m+2).fill([]).map(() => new Array(n+2).fill(Infinity))
  for (let i = 1; i<=n; i++) {
    dp[1][i] = matrix[0][i-1]
  }
  for (let i = 2; i<=m; i++) {
    for (let j = 1; j<=n; j++) {
      dp[i][j] = Math.min(dp[i-1][j], Math.min(dp[i-1][j-1], dp[i-1][j+1]))+matrix[i-1][j-1]
    }
  }
  let ans = Infinity
  for (let i = 1; i<=n; i++) {
    if (dp[m][i] < ans) {
      ans = dp[m][i]
    }
  }
  return ans
};
