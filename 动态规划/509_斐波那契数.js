var fib = function(n) {
  if (n<2) {
    return n
  }
  let s1 = 0, s2 = 1
  let res = 0
  for (let i = 1; i<n; i++) {
    res = s1+s2;
    [s1, s2] = [s2, res]
  }
  return res
};
