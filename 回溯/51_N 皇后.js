var solveNQueens = function(n) {
  let ans = []
  let arr = new Array(n).fill([]).map(() => new Array(n).fill('.'))
  backtrace(arr, 0, ans)
  return ans
};

let backtrace = (arr, row, ans) => {
  let len = arr.length
  console.log(len)
  if (row === len) {
    ans.push(transform(arr))
    return
  }
  for (let i = 0; i<len; i++) {
    if (isValid(arr, row, i)) {
      arr[row][i] = 'Q'
      backtrace(arr, row+1, ans)
      arr[row][i] = '.'
    }
  }
}

let isValid = (arr, row, col) => {
  let n = arr.length
  for (let i = row; i>=0; i--) {
    if (arr[i][col] === 'Q') {
      return false
    }
  }
  for (let i = row, j = col; i>=0 && j>=0 ; i--, j--) {
    if (arr[i][j] === 'Q') {
      return false
    }
  }
  for (let i = row, j = col; i>=0 && j<n; i--, j++) {
    if (arr[i][j] === 'Q') {
      return false
    }
  }
  return true
}

let transform = board => {
  let chess=[]
  board.forEach(row => {
    let str = ''
    row.forEach(item => {
      str+=item
    })
    chess.push(str)
  })
  return chess
}
