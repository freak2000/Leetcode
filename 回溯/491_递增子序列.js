var findSubsequences = function(nums) {
  let ans = []
  let tem = []
  let len = nums.length
  let backtrace = (last, level) => {
    if (level === len) {
      if (tem.length>1) {
        ans.push(tem.slice(0))
      }
      return
    }
    if (nums[level] >= last) {
      tem.push(nums[level])
      backtrace(nums[level], level+1)
      tem.pop()
    }
    if (nums[level] !== last) {
      backtrace(last, level+1)
    }
  }
  backtrace(-Infinity, 0)
  return ans
};
