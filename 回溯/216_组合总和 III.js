var combinationSum3 = function(k, n) {
  let ans = []
  let tem = []
  let sum = 0
  let backtrace = (index, level) => {
    if (level === k && sum === n) {
      ans.push(tem.slice(0))
      return
    }
    for (let i = index; i<10; i++) {
      sum+=i
      tem.push(i)
      backtrace(i+1, level+1)
      tem.pop()
      sum-=i
    }
  }
  backtrace(1, 0)
  return ans
};
