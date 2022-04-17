var minDistance = function(word1, word2) {
  let m = word1.length
  let n = word2.length
  let dp = new Array(m+1).fill([]).map(() => new Array(1+n).fill(0))
  for (let i = 1; i<=m; i++) {
    let c1 = word1[i-1]
    for (let j = 1; j<=n; j++) {
      let c2 = word2[j-1]
      if (c1 === c2) {
        dp[i][j] = 1+dp[i-1][j-1]
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
      }
    }
  }
  return m+n-2*dp[m][n]
};
