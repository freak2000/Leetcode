/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    let dp = new Array(m+1).fill().map(() => new Array(n+1).fill(0))
    for (let item of strs) {
        let num0 = 0
        let num1 = 0
        for (let char of item) {
            if (char === '0') {
                num0++
            } else {
                num1++
            }
        }
        for (let i = m; i>=num0; i--) {
            for (let j = n; j>=num1; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i-num0][j-num1]+1)
            }
        }
    }
    return dp[m][n]
};
