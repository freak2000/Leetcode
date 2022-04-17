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
