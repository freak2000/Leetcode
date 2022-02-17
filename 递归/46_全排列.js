let backtrace = (res, num, le, ri) => {
  if (le === ri) {
    res.push(num.slice(0))
  }
  for (let i = le; i<ri; i++) {
    [num[i], num[le]] = [num[le], num[i]]
    backtrace(res, num, le+1, ri)
    let ss = num[i]
    num[i] = num[le]
    num[le] = ss
  }
}
var permute = function(nums) {
  let res = []
  backtrace(res, nums, 0, nums.length)
  return res
};
