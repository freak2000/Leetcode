var maxProfit = function(k, prices) {
  let n = prices.length
  if(!n || !k) {
    return 0
  }
  let record = new Array(k).fill(1).map(v => new Array(2).fill(-prices[0], 0))
  for (let i = 0; i<n; i++) {
    record[0][0] = Math.max(record[0][0], -prices[i])
    record[0][1] = Math.max(record[0][1], record[0][0]+prices[i])
    for(let j = 1; j<k; j++) {
      record[j][0] = Math.max(record[j][0], record[j-1][1]-prices[i])
      record[j][1] = Math.max(record[j][1], record[j][0]+prices[i])
    }
  }
  return record[k-1][1]
};
