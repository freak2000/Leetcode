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
