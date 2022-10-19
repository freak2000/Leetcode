/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  let m = board.length
  let n = board[0].length
  let visited = new Array(m).fill().map(() => new Array(n).fill(false))
  let dfs = (i, j, flag) => {
    if (i < 0|| j<0 || i>=m || j>=n || visited[i][j] || board[i][j] === 'X') {
      return
    }
    visited[i][j] = true
    if (flag === 0) {
      dfs(i+1, j, 0)
      dfs(i-1, j, 0)
      dfs(i, j+1, 0)
      dfs(i, j-1, 0)
    } else {
      board[i][j] = 'X'
      dfs(i+1, j, 1)
      dfs(i-1, j, 1)
      dfs(i, j+1, 1)
      dfs(i, j-1, 1)
    }
  }
  for (let i = 0; i<m; i++) {
    dfs(i, 0, 0)
    dfs(i, n-1, 0)
  }
  for (let j = 0; j<n; j++) {
    dfs(0, j, 0)
    dfs(m-1, j, 0)
  }
  for (let i = 1; i<m; i++) {
    for (let j = 1; j<n; j++) {
      if (board[i][j] === 'O') {
        dfs(i, j, 1)
      }
    }
  }
  return board
};
