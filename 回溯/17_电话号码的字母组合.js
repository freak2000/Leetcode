var letterCombinations = function(digits) {
  let map = new Map([['2', 'abc'],['3', 'def'],['4','ghi'],['5', 'jkl'],['6', 'mno'],['7', 'pqrs'],['8', 'tuv'],['9', 'wxyz']])
  let ans = []
  let tem = ''
  len = digits.length
  if (!len) {
    return []
  }
  let backtrace = index => {
    if (index === len) {
      ans.push(tem)
      return
    }
    let str = map.get(digits[index])
    for (let item of str) {
      let ss= tem
      tem += item
      backtrace(index+1)
      tem = ss
    }
  }
  backtrace(0)
  return ans
};
