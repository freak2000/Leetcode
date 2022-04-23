// 动态规划法，假设每一天结束后，出现了四种状态，buy1 sell1 buy2 sell2，通过转义方程
// buy1 = Math.max(buy1, -prices[i])
// sell1 = Math.max(sell1, buy1+prices[i])
// buy2 = Math.max(buy2, sell1-prices[i])
// sell2 = Math.max(sell2, buy2+prices[i])
// 获得这一天第二次卖出时的最大利润，通过for循环，得出最后一天的最大利润
var maxProfit = function(prices) {
  let buy1 = -prices[0], sell1 = 0, buy2 = -prices[0], sell2 = 0
  for (let i = 0; i<prices.length; i++) {
    buy1 = Math.max(buy1, -prices[i])
    sell1 = Math.max(sell1, buy1+prices[i])
    buy2 = Math.max(buy2, sell1-prices[i])
    sell2 = Math.max(sell2, buy2+prices[i])
  }
  return sell2
};

// 使用dp数组
var maxProfit = function(prices) {
  let len = prices.length
  let dp = new Array(len).fill([]).map(() => new Array(2).fill([]).map(() => new Array(3).fill(0)))
  for (let i = 0; i<len; i++) {
    for (let k = 2; k>=1; k--) {
      if (i===0) {
        dp[i][0][k] = 0
        dp[i][1][k] = -prices[i]
        continue
      }
      dp[i][0][k] = Math.max(dp[i-1][0][k], dp[i-1][1][k] + prices[i])
      dp[i][1][k] = Math.max(dp[i-1][1][k], dp[i-1][0][k-1] - prices[i])
    }
  }
  return dp[len-1][0][2]
};
