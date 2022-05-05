var myAtoi = function(s) {
  s = s.trim()
  let res = s.match(/^[+-]?\d+/)
  res = res ? res[0] : 0
  let max = Math.pow(2, 31)-1
  let min = -Math.pow(2, 31)
  if (max<res) {
    res = max
  } else if (min>res) {
    res = min
  }
  return res
};

console.log(myAtoi(' -0023  9p'))
