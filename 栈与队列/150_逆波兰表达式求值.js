/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let stack = []
  for (let item of tokens) {
    if (item === '+' || item === '-' || item === '/' || item === '*') {
      let n1 = stack.pop()
      let n2 = stack.pop()
      if (item === '+') {
        stack.push(n1+n2)
      } else if (item === '-') {
        stack.push(n2 - n1)
      } else if (item === '*') {
        stack.push(n1 * n2)
      } else {
        stack.push((n2 / n1) | 0)
      }
    } else {
      stack.push(Number(item))
    }
  }
  return stack[0]
};
