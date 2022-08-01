var combinationSum = function(candidates, target) {
  let ans = []
  let sum = 0
  let tem = []
  let backtrace = index => {
    if (sum === target) {
      ans.push([...tem])
    }
    for (let i = index; i<candidates.length && sum<target; i++) {
      tem.push(candidates[i])
      sum+=candidates[i]
      backtrace(i)
      sum-=candidates[i]
      tem.pop()
    }
  }
  backtrace(0)
  return ans
};
