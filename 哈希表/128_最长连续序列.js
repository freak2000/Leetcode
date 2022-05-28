var longestConsecutive = function(nums) {
  let set = new Set(nums)
  let ans = 0
  let curans = 0
  for (let item of nums) {
    if (!set.has(item-1)) {
      let curNum = item
      curans = 1
      while (set.has(curNum+1)) {
        curNum+=1
        curans+=1
      }
      ans = Math.max(ans, curans)
    }
  }
  return ans
};
