var combine = function(n, k) {
  let ans = []
  let tem = []
  let backtrace = (n, index, level) => {
    if (k === level) {
      ans.push(tem.slice(0))
    }
    for (let i = index; i<=n; i++) {
      tem.push(i)
      backtrace(n, i+1, level+1)
      tem.pop()
    }
  }
  backtrace(n, 1, 0)
  return ans
};

var combine = function(n, k) {
  let ans = []
  let temp = []
  let backtrace = index => {
    if (temp.length === k) {
      ans.push([...temp])
      return
    }
    for (let i = index; i+k-temp.length-1 <= n; i++) {
      temp.push(i)
      backtrace(i+1)
      temp.pop()
    }
  }
  backtrace(1)
  return ans
};
