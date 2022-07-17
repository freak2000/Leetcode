var postorderTraversal = function(root) {
  if (!root) return []
  let stack = []
  let res = []
  stack.push(root)
  while(stack.length) {
    let node = stack.pop()
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
    res.push(node.val)
  }
  res.reverse()
  return res
};
