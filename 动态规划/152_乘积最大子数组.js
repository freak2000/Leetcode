// 动态规划
var maxProduct = function(nums) {
  let max = nums[0]
  let maxNow = 1, minNow = 1
  for(let item of nums) {
    // 遇到值为负数则调换最大，最小值
    if (item < 0) {
      [maxNow, minNow] = [minNow, maxNow]
    }
    maxNow = Math.max(item, maxNow*item)
    minNow = Math.min(item, minNow*item)
    max = Math.max(maxNow, max)
  }
  return max
};
