var maxAreaOfIsland = function(grid) {
  if (!grid) {
    return 0
  }
  let maxSpace = 0
  let len = grid.length
  let width = grid[0].length
  for (let i = 0; i<len; i++) {
    for (let j = 0; j<width; j++) {
      if (grid[i][j]) {
        let space = dfs(grid, i, j)
        maxSpace = Math.max(space, maxSpace)
      }
    }
  }
  return maxSpace
};

let dfs = (grid, i, j) => {
  let len = grid.length
  let width = grid[0].length
  if (i<0 || j<0 || j>=width || i>=len || !grid[i][j]) {
    return 0
  }
  let space = 1
  grid[i][j] = 0
  space+=dfs(grid, i+1, j)
  space+=dfs(grid, i-1, j)
  space+=dfs(grid, i, j+1)
  space+=dfs(grid, i, j-1)
  return space
}
