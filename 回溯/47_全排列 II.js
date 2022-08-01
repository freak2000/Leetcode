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

var permuteUnique = function(nums) {
  let ans = []
  let temp = []
  let set = new Set()
  let backtrace = index => {
    if (index === nums.length) {
      ans.push([...temp])
    }
    let set2 = new Set()
    for (let i = 0; i<nums.length; i++) {
      if (!set.has(i) && !set2.has(nums[i])) {
        set2.add(nums[i])
        temp.push(nums[i])
        set.add(i)
        backtrace(index+1)
        temp.pop()
        set.delete(i)
      }
    }
  }
  backtrace(0)
  return ans
};
