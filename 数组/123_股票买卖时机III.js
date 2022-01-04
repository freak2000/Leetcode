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
