var closedIsland = function(grid) {
  if (!grid) {
    return 0
  }
  let res = 0
  let m = grid.length
  let n = grid[0].length
  let dfs = (i, j) => {
    if (i<0 || j<0 || i>=m || j>=n || grid[i][j] === 1) {
      return
    }
    grid[i][j] = 1
    dfs(i+1, j)
    dfs(i, j+1)
    dfs(i-1, j)
    dfs(i, j-1)
  }
  for (let i = 0; i<m; i++) {
    dfs(i, 0)
    dfs(i, n-1)
  }
  for (let i = 0; i<n; i++) {
    dfs(0, i)
    dfs(m-1, i)
  }
  for (let i = 0; i<m; i++) {
    for (let j = 0; j<n; j++) {
      if (grid[i][j] === 0) {
        res++
        dfs(i, j)
      }
    }
  }
  return res
};
