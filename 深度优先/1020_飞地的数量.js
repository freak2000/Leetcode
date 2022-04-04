var numEnclaves = function(grid) {
  if (!grid) {
    return 0
  }
  let res = 0
  let m = grid.length
  let n = grid[0].length
  let dfs = (i, j, k) => {
    if (i<0 || j<0 || i>=m || j>=n || grid[i][j] === 0) {
      return
    }
    res+=k
    grid[i][j] = 0
    dfs(i+1, j, k)
    dfs(i, j+1, k)
    dfs(i-1, j, k)
    dfs(i, j-1, k)
  }
  for (let i = 0; i<m; i++) {
    dfs(i, 0, 0)
    dfs(i, n-1, 0)
  }
  for (let i = 0; i<n; i++) {
    dfs(0, i, 0)
    dfs(m-1, i, 0)
  }
  for (let i = 0; i<m; i++) {
    for (let j = 0; j<n; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j, 1)
      }
    }
  }
  return res
};
