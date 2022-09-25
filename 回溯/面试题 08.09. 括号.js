/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let ans = []
  let temp = ''
  let map = new Map()
  map.set('(', n)
  map.set(')', n)
  let backtrace = index => {
    if (index === 2*n+1) {
      ans.push(temp)
    }
    if (map.get('(') > 0) {
      temp += '('
      map.set('(', map.get('(') - 1)
      backtrace(index+1)
      temp = temp.slice(0, -1)
      map.set('(', map.get('(') + 1)
    }
    if (map.get('(') < map.get(')')) {
      temp += ')'
      map.set(')', map.get(')') - 1)
      backtrace(index+1)
      temp = temp.slice(0, -1)
      map.set(')', map.get(')') + 1)
    }
  }
  backtrace(1)
  return ans
};
