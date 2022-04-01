var combinationSum = function(candidates, target) {
  let ans = []
  let tem = []
  let sum = 0
  let backtrace = (candidates, index) => {
    if (index === candidates.length || sum>target) {
      return
    }
    if (sum === target) {
      ans.push(tem.slice(0))
    }
    for(let i = index; i<candidates.length; i++) {
      tem.push(candidates[i])
      sum+=candidates[i]
      backtrace(candidates, i)
      tem.pop()
      sum-=candidates[i]
    }
  }
  backtrace(candidates, 0)
  return ans
};
