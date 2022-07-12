var simplifyPath = function(path) {
  let stack = []
  let arr = path.split('/')
  for (let item of arr) {
    if (item === '..') {
      if (stack.length) {
        stack.pop()
      }
    } else if (item !== '' && item !== '.') {
      stack.push(item)
    }
  }
  return '/' + stack.join('/')
};

// 测试..返回上一级目录
console.log(simplifyPath("/a/./b/../../c/"))
// 测试连续斜杠
console.log(simplifyPath("/home//foo/"))
// 测试从根目录返回上一级目录
console.log(simplifyPath("/../"))
