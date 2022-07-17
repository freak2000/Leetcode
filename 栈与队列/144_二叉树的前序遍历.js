var preorderTraversal = function(root) {
  if (!root) {
    return []
  }
  let stack = []
  let ans = []
  stack.push(root)
  while (stack.length) {
    let node = stack.pop()
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
    ans.push(node.val)
  }
  return ans
};
