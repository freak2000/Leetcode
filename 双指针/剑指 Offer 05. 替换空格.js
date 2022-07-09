// 使用正则表达式
var replaceSpace = function(s) {
  s = s.replace(/\s/g, '%20')
  return s
};

// 使用双指针法
var replaceSpace = function(s) {
  let arr = s.split('')
  let i = 0
  for (let item of s) {
    if (item === ' ') {
      arr[i++] = '%'
      arr[i++] = '2'
      arr[i++] = '0'
    } else {
      arr[i++] = item
    }
  }
  return arr.join('')
};
