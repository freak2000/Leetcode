var minDepth = function(root) {
  if (!root) {
    return 0
  }
  let dep = 1
  let stack = []
  stack.push(root)
  while(stack.length) {
    let len = stack.length
    for (let i = 0; i<len; i++) {
      let node = stack.shift()
      if (node.left===null && node.right===null) {
        return dep
      }
      if (node.left != null) {
        stack.push(node.left)
      }
      if (node.right != null) {
        stack.push(node.right)
      }
    }
    dep++
  }
  return dep
};
