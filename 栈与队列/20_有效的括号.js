var isValid = function(s) {
  let stack = []
  let map = new Map([[']', '['], [')', '('], ['}', '{']])
  // 逐个遍历
  for (item of s) {
    if (!map.has(item)) {
      stack.push(item)
    } else {
      if (map.get(item) !== stack.pop())
        return false
    }
  }
  // 判断最后栈是否为空
  return !stack.length;
};
