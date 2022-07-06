/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = []
  nums.sort(function(a, b) {return a-b})
  let len = nums.length
  for (let i = 0; i<len-2; i++) {
    if (nums[i]>0) {
      break
    }
    if (i>0 && nums[i] === nums[i-1]) {
      continue
    }
    let le = i+1
    let ri = len-1
    while (le<ri) {
      if (nums[le]+nums[ri]+nums[i] === 0) {
        if (!res.length || [nums[i], nums[le], nums[ri]].toString() !== res[res.length-1].toString()) {
          res.push([nums[i], nums[le], nums[ri]])
        }
        le++
        ri--
      } else if (nums[le]+nums[ri]+nums[i] > 0) {
        ri--
      } else {
        le++
      }
    }
  }
  return res
};
