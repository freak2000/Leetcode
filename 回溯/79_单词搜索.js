/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let ans = ''
    let index = 0
    let arr = new Array(board.length).fill([]).map(() => new Array(board[0].length).fill(0))
    let backtrace = (i, j) => {
        if (i<0 || j<0 || i>=board.length || j>=board[0].length || arr[i][j] === 1 || board[i][j] !== word[index]) {
            return false
        }
        arr[i][j] = 1
        index++
        if (index === word.length) {
            arr[i][j] = 0
            index--
            return true
        }
        let res1 = backtrace(i-1, j)
        let res2 = backtrace(i+1, j)
        let res3 = backtrace(i, j+1)
        let res4 = backtrace(i, j-1)
        arr[i][j] = 0
        index--
        return (res1 || res2 || res3 || res4)
    }
    for (let i = 0; i<board.length; i++) {
        for (let j = 0; j<board[0].length; j++) {
            if (board[i][j] === word[index]) {
                let res = backtrace(i, j)
                if (res) {
                    return true
                }
            }
        }
    }
    return false
};
