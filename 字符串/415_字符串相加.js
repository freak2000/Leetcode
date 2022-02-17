var addStrings = function(num1, num2) {
  let add = 0, l1 = num1.length-1, l2 = num2.length-1, res = []
  while (l1>=0 || l2>=0 || add) {
    // 把字符串转化为数字
    let a = l1 >= 0 ? num1.charAt(l1) - '0' : 0
    let b = l2 >= 0 ? num2.charAt(l2) - '0': 0
    let num = a+b+add
    res.push(num%10)
    add = Math.floor(num/10)
    l2--
    l1--
  }
  // 逆序并转化为字符串
  return res.reverse().join('')
};
