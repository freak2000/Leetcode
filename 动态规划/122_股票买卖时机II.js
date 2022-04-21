// 使用贪心法，涨就卖，跌就买
var maxProfit = function(prices) {
  let profit = 0
  // 从第一天开始，假设我是一个神仙，每天都知道明天的股价，如果每天股价比今天高，就买入，否则不买
  for(let i=1; i<prices.length; i++) {
    profit+=Math.max(prices[i]-prices[i-1],0)
  }
  return profit
};

// 使用动态规划法
var maxProfit = function(prices) {
  let length = prices.length
  // 定义第一天在有买股票和没有买股票时候的利润
  let buy = -prices[0], no = 0
  // 利用动态规划的转移方程
  // dp[i][0]=max{dp[i−1][0],dp[i−1][1]+prices[i]}
  // dp[i][1]=max{dp[i−1][1],dp[i−1][0]−prices[i]}
  for(let i=0; i<length; i++) {
    let tempBuy = Math.max(buy, no-prices[i])
    let tempNo = Math.max(no, buy+prices[i])
    buy = tempBuy
    no = tempNo
  }
  return no
};

// 动态规划，dp数组
var maxProfit = function(prices) {
  let len = prices.length
  let dp = new Array(len).fill([]).map(() => new Array(2).fill(0))
  dp[0][1] = -prices[0]
  for (let i = 1; i<len; i++) {
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]+prices[i])
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0]-prices[i])
  }
  return dp[len-1][0]
};
