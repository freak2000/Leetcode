var invertTree = function(root) {
  if (!root) {
    return null
  }
  let le = invertTree(root.left)
  let ri = invertTree(root.right)
  root.left = ri
  root.right = le
  return root
};

// 深度优先
var invertTree = function(root) {
  let stack = []
  if (root) {
    stack.push(root)
  }
  while (stack.length) {
    let node = stack.pop();
    [node.left, node.right] = [node.right, node.left];
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }
  return root
};
