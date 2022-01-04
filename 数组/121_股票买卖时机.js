// 贪心算法，每个时候都有这个时候的最优解，这个最优解也会对后面的最优解产生影响
var maxProfit = function(prices) {
  let profit = 0, minprice = 9999999
  for (price of prices) {
    profit = Math.max(profit, price - minprice)
    minprice = Math.min(minprice, price)
  }
  return profit
};

// 暴力解法，把所有的数组元素之间的差列举出来，思路简单，但是运行时间较长
var maxProfit = function(prices) {
  let ans=0
  for(let i=0; i<prices.length-1; i++) {
    for(let j=i+1; j<prices.length; j++) {
      if (prices[j]-prices[i]>ans) {
        ans = prices[j]-prices[i]
      }
    }
  }
  return ans
};

