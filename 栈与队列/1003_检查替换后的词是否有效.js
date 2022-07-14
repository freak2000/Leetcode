var isValid = function(s) {
  // 建立一个栈用来存放字符
  let stack = []
  for (let i of s) {
    // 按照规则，字符串的第一个c前面一定紧跟着ab
    if (i === 'c') {
      let strb = stack.pop()
      let stra = stack.pop()
      if (strb !=='b' || stra!=='a') {
        return false
      }
    } else {
      stack.push(i)
    }
  }
  // 判断字符串abc数量是不是相等
  return !stack.length
};


var isValid = function(s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'c') {
      if (stack.length >=2) {
        if (stack[stack.length-1] === 'b' && stack[stack.length-2] === 'a') {
          stack.pop()
          stack.pop()
        } else {
          stack.push(s[i])
        }
      } else {
        return false
      }
    } else {
      stack.push(s[i])
    }
  }
  return stack.length === 0
};
