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
