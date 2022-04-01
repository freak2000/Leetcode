var permuteUnique = function(nums) {
  let ans = []
  let tem = []
  let used = new Array(nums.length)
  nums.sort((a, b) => a-b)
  let backtrace = nums => {
    if (nums.length === tem.length) {
      ans.push(tem.slice(0))
    }
    for (let i = 0; i<nums.length; i++) {
      if(used[i]) {
        continue
      }
      if (i>0 && !used[i-1] && nums[i] === nums[i-1]) {
        continue
      }
      tem.push(nums[i])
      used[i] = 1
      backtrace(nums)
      used[i] = 0
      tem.pop()
    }
  }
  backtrace(nums)
  return ans
};
