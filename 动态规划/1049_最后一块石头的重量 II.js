/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    let sum = 0
    for (let item of stones) {
        sum+=item
    }
    let half = Math.floor(sum/2)
    let dp = new Array(half+1).fill(0)
    for (let i = 0; i<stones.length; i++) {
        for (let j = half; j>=stones[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j-stones[i]]+stones[i])
        }
    }
    return sum-dp[half]-dp[half]
};
