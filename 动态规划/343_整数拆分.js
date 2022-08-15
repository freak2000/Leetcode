/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    let ans = new Array(n+1).fill(0)
    ans[2] = 1
    for (let i = 3; i<=n; i++) {
        for (let j = 1; j<=i-j; j++) {
            ans[i] = Math.max(ans[i], j * (i-j), j*ans[i-j])
        }
    }
    return ans[n]
};
