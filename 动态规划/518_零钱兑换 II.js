var change = function(amount, coins) {
  let dp = new Array(amount+1).fill(0)
  dp[0] = 1
  for (let item of coins) {
    for (let j = item; j<=amount; j++) {
      dp[j] += dp[j-item]
    }
  }
  return dp[amount]
};
