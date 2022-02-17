var uniquePaths = function(m, n) {
  let ans = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i<m; i++) {
    ans[i][0] = 1
  }
  for (let i = 0; i<n; i++) {
    ans[0][i] = 1
  }
  for (let i = 1; i<m; i++){
    for(let j = 1; j<n; j++) {
      ans[i][j] = ans[i-1][j] + ans[i][j-1]
    }
  }
  return ans[m-1][n-1]
};
