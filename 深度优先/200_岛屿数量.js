/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid) {
    return 0
  }
  let island = 0
  let len = grid.length
  let width = grid[0].length
  for (let i = 0; i<len; i++) {
    for (let j = 0; j<width; j++) {
      if (grid[i][j] === '1') {
        island++
        dfs(grid, i, j)
      }
    }
  }
  return island
};

let dfs = (grid, i, j) => {
  let len = grid.length
  let width = grid[0].length
  if (j<0 || i<0 || i>=len || j>=width || grid[i][j] === '0') {
    return
  }
  grid[i][j] = '0'
  dfs(grid, i+1, j)
  dfs(grid, i, j+1)
  dfs(grid, i-1, j)
  dfs(grid, i, j-1)
}
