var countSubIslands = function(grid1, grid2) {
  let m = grid1.length
  let n = grid1[0].length
  let res = 0
  let dfs = (i, j) => {
    if (i<0 || j<0 || i>=m || j>= n || !grid2[i][j]) {
      return
    }
    grid2[i][j] = 0
    dfs(i+1, j)
    dfs(i-1, j)
    dfs(i, j+1)
    dfs(i, j-1)
  }
  for (let i = 0; i<m; i++) {
    for (let j = 0; j<n; j++) {
      if (!grid1[i][j] && grid2[i][j]) {
        dfs(i, j)
      }
    }
  }
  for (let i = 0; i<m; i++) {
    for (let j = 0; j<n; j++) {
      if (grid2[i][j]) {
        res++
        dfs(i, j)
      }
    }
  }
  return res
};
