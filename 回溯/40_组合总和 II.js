var combinationSum2 = function(candidates, target) {
  let ans = []
  let tem = []
  let sum = 0
  candidates.sort((a, b) => a-b)
  let backtrace = (candidates, index) => {
    if (sum === target) {
      ans.push(tem.slice(0))
    }
    if (index === candidates.length || sum>target) {
      return
    }
    for(let i = index; i<candidates.length; i++) {
      if (i>index && candidates[i] === candidates[i-1]) {
        continue
      }
      tem.push(candidates[i])
      sum+=candidates[i]
      backtrace(candidates, i+1)
      tem.pop()
      sum-=candidates[i]
    }
  }
  backtrace(candidates, 0)
  return ans
};
