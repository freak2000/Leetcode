var sortedSquares = function(nums) {
  nums = nums.map((item, index, array) => item*item)
  nums.sort((a, b) => a-b)
  return nums
};

// 双指针法
var sortedSquares = function(nums) {
  let ans = []
  let le = 0
  let ri = nums.length-1
  while(le<=ri) {
    if (nums[le]*nums[le] >= nums[ri]*nums[ri]) {
      ans.unshift(nums[le]*nums[le])
      le++
    } else {
      ans.unshift(nums[ri]*nums[ri])
      ri--
    }
  }
  return ans
};
