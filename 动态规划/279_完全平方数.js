/**
 * @param {number} n
 * @return {number}
 */
 var numSquares = function(n) {
    for (var len = 1; len*len<=n; len++);
    len--
    let dp = new Array(n+1).fill(Infinity)
    dp[0] = 0
    for (let i = 1; i<=len; i++) {
        for (let j = i*i; j<=n; j++) {
            if (dp[j-i*i] !== Infinity) {
                dp[j] = Math.min(dp[j], dp[j-i*i]+1)
            }
        }
    }
    return dp[n]
};