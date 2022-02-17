var compareVersion = function(version1, version2) {
  // 把字符串分割为数组
  let x = version1.split('.')
  let y = version2.split('.')
  for (let i = 0; i < Math.max(x.length, y.length); i++) {
    // 把每一个数组内的字符串转为数字
    if (i < x.length) {
      x[i] = parseInt(x[i])
    } else {
      x[i] = 0
    }
    if (i < y.length) {
      y[i] = parseInt(y[i])
    } else {
      y[i] = 0
    }
    if (x[i] > y[i]) {
      return 1
    }
    if (x[i] < y[i]) {
      return -1
    }
  }
  return 0
};
