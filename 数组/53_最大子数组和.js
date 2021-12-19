/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let enb = 0, ans = nums[0]
  nums.forEach((x) => {
    // 计算以x为最后一项的数组的结果
    enb = Math.max(x, enb+x)
    // 更新结果
    ans = Math.max(ans, enb)
  })
  return ans
};
// 利用动态规划，f(i)=max(f(i-1)+nums[i],nums[i])
