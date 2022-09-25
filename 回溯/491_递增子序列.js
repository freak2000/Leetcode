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


var findSubsequences = function(nums) {
  let ans = []
  let temp = []
  let backtrace = index => {
    if (temp.length >= 2) {
      ans.push([...temp])
    }
    let set = new Set()
    for (let i = index; i<nums.length; i++) {
      if (set.has(nums[i])) {
        continue
      }
      if (!temp.length || temp[temp.length-1] <= nums[i]) {
        set.add(nums[i])
        temp.push(nums[i])
        backtrace(i+1)
        temp.pop()
      }
    }
  }
  backtrace(0)
  return ans
};
