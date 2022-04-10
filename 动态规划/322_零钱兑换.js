var coinChange = function(coins, amount) {
  let dp = new Array(amount+1).fill(Infinity)
  dp[0] = 0
  for (let i = 0; i<dp.length; i++) {
    for (let item of coins) {
      if (item>i) {
        continue
      }
      dp[i] = Math.min(dp[i-item]+1, dp[i])
    }
  }
  return (dp[amount] === Infinity ? -1 : dp[amount])
};
