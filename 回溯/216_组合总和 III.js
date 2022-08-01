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


var combinationSum3 = function(k, n) {
  let ans = []
  let temp = []
  let sum = 0
  let backtrace = index => {
    if (temp.length === k) {
      if (sum === n) {
        ans.push([...temp])
      }
      return
    }
    for (let i = index; i+k-temp.length-1 <= 9 && sum < n; i++) {
      sum+=i
      temp.push(i)
      backtrace(i+1)
      temp.pop()
      sum-=i
    }
  }
  backtrace(1)
  return ans
};
