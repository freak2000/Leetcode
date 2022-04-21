var maxProfit = function(prices) {
  let len = prices.length
  let dp = new Array(len).fill([]).map(() => new Array(3).fill(0))
  dp[0][0] = -prices[0]
  // dp[i][0]持有股票并且有最大收益
  // dp[i][1]不持有股票，不在冷冻期，有最大收益
  // dp[i][2]不持有股票，在冷冻期，有最大收益
  for (let i = 1; i<len; i++) {
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]-prices[i])
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][2])
    dp[i][2] = dp[i-1][0] + prices[i]
  }
  return Math.max(dp[len-1][1], dp[len-1][2])
};
