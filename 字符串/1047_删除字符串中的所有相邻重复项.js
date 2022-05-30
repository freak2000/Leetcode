var removeDuplicates = function(s) {
  let stack = []
  for (let item of s) {
    if (!stack.length || stack[stack.length-1] !== item) {
      stack.push(item)
    } else {
      stack.pop()
    }
  }
  return stack.join('')
};
