var numSubarrayProductLessThanK = function(nums, k) {
  let sum = 0
  let len = nums.length
  let mul = 0
  let dfs = (level) => {
    if (level === len) {
      if (mul<k) {
        sum++
        console.log(mul)
        return sum
      } else {
        return sum
      }
    }
    let temp = mul
    if (mul === 0) {
      mul += nums[level]
    } else {
      mul *= nums[level]
    }
    dfs(level+1)
    mul = temp
    dfs(level+1)
    return sum
  }
  return dfs(0)
};

numSubarrayProductLessThanK([10,5,2,6], 100)
