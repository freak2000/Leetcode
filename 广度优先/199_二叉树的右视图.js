// bfs
var rightSideView = function(root) {
  let ans = []
  if (!root) {
    return ans
  }
  let stack = []
  stack.push(root)
  while (stack.length) {
    len = stack.length
    ans.push(stack[0].val)
    for (let i = 0; i<len; i++) {
      let node = stack.shift()
      node.right && stack.push(node.right)
      node.left && stack.push(node.left)
    }
  }
  return ans
};
