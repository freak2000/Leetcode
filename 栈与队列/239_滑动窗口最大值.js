// 维护单调栈
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

var maxSlidingWindow = function(nums, k) {
  let stack = []
  let ans = []
  let flag = 0
  for (let i = 0; i<nums.length; i++) {
    if (flag+k === i && nums[flag] === stack[0]) {

      stack.shift()
      flag++
      while (stack.length && nums[flag] !== stack[0]) {
        flag++
      }
    }
    while (stack.length && stack[stack.length-1] < nums[i]) {
      stack.pop()
    }
    if (!stack.length) {
      flag = i
    }
    stack.push(nums[i])
    if (i>=k-1) {
      ans.push(stack[0])
    }

  }
  return ans
};
