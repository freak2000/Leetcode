var minimumTotal = function(triangle) {
  let m = triangle.length
  let n = triangle[m-1].length
  let dp = new Array(m+1).fill([]).map(() => new Array(1+n).fill(Infinity))
  dp[1][1] = triangle[0][0]
  for (let i = 2; i<=m; i++) {
    for (let j = 1; j<=i; j++) {
      dp[i][j] = Math.min(dp[i-1][j], dp[i-1][j-1])+triangle[i-1][j-1]
    }
  }
  let ans = Infinity
  for (let i = 1; i<=n; i++) {
    if (ans>dp[m][i]) {
      ans = dp[m][i]
    }
  }
  return ans
};
