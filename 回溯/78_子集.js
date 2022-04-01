var subsets = function(nums) {
  let ans = []
  let tem = []
  let len = nums.length
  let backtrace = (nums, index) => {
    ans.push(tem.slice(0))
    for (let i = index; i<len; i++) {
      tem.push(nums[i])
      backtrace(nums, i+1)
      tem.pop()
    }
  }
  backtrace(nums, 0)
  return ans
};
