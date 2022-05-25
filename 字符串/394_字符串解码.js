/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let numStack = []
  let strStack = []
  let num = 0
  let str = ''
  for (let item of s) {
    if (item <= '9' && item >= '0') {
      num = num*10 + Number(item)
    } else if (item === '[') {
      strStack.push(str)
      str = ''
      numStack.push(num)
      num = 0
    } else if (item === ']') {
      let times = numStack.pop()
      str = strStack.pop() + str.repeat(times)
    } else {
      str += item
    }
  }
  return str
};
