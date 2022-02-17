var climbStairs = function(n) {
  if (n===1) {
    return n
  }
  let first = 1
  let second = 2
  let third = 2
  for(let i = 3; i<=n; i++) {
    third = first+second
    first = second
    second = third
  }
  return third
};
