// 自顶向下
var minPathSum = function(grid) {
  let m  = grid.length
  let n = grid[0].length
  let memo = new Array(m).fill([]).map(() => new Array(n).fill(0))
  let dp = (i, j) => {
    if (i<0 || j<0) {
      return Infinity
    }
    if (memo[i][j]) {
      return memo[i][j]
    }
    if (!i && !j) {
      memo[i][j] = grid[i][j]
      return grid[i][j]
    }
    memo[i][j] = grid[i][j] + Math.min(dp(i-1, j), dp(i, j-1))
    return memo[i][j]
  }
  return dp(m-1, n-1)
};

// 自底向上
var minPathSum = function(grid) {
  let m  = grid.length
  let n = grid[0].length
  let dp = new Array(m).fill([]).map(() => new Array(n))
  dp[0][0] = grid[0][0]
  for (let i = 1; i<m; i++) {
    dp[i][0] = dp[i-1][0]+grid[i][0]
  }
  for (let i = 1; i<n; i++) {
    dp[0][i] = dp[0][i-1]+grid[0][i]
  }
  for (let i = 1; i<m; i++) {
    for (let j = 1; j<n; j++) {
      dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1])+grid[i][j]
    }
  }
  return dp[m-1][n-1]
};
