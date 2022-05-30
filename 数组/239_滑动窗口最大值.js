var maxSlidingWindow = function(nums, k) {
  let stack = []
  let ans = []
  for (let i = 0; i<nums.length; i++) {
    while(stack.length && nums[stack[stack.length - 1]] <= nums[i]) {
      stack.pop()
    }
    stack.push(i)
    while (stack[0]+k <= i) {
      stack.shift()
    }
    if (i>=k-1) {
      ans.push(nums[stack[0]])
    }
  }
  return ans
};
