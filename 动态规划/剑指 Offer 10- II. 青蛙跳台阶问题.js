var numWays = function(n) {
  if (n<=1) {
    return 1
  }
  let pre = 1n
  let cur = 1n
  let flag = 1n
  while(flag<n) {
    [cur, pre] = [pre+cur, cur]
    flag++
  }
  return cur%1000000007n
};
