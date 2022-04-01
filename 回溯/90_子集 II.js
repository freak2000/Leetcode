var subsetsWithDup = function(nums) {
  nums.sort((a, b) => a-b)
  let ans = []
  let tem = []
  let backtrace = (nums, index) => {
    ans.push(tem.slice(0))
    for(let i = index; i<nums.length; i++) {
      if (i>index && nums[i] === nums[i-1]) {
        continue
      }
      tem.push(nums[i])
      backtrace(nums, i+1)
      tem.pop()
    }
  }
  backtrace(nums, 0)
  return ans
};
