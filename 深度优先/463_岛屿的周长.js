var islandPerimeter = function(grid) {
  let m = grid.length
  let n = grid[0].length
  let res = 0
  let visited = new Array(m).fill([]).map(() => new Array(n).fill(0))
  let dfs = (i, j) => {
    if (i<0 || j<0 || i>=m || j>= n) {
      res++
      return
    }
    if (!grid[i][j]) {
      if (!visited[i][j]) {
        res++
      }
      return
    }
    visited[i][j] = 1
    grid[i][j] = 0
    dfs(i+1, j)
    dfs(i-1, j)
    dfs(i, j+1)
    dfs(i, j-1)
  }
  for (let i = 0; i<m; i++) {
    for (let j = 0; j<n; j++) {
      if (grid[i][j]) {
        dfs(i, j)
      }
    }
  }
  return res
};
