var flatten = function(root) {
  if (!root) {
    return root
  }
  let leftTree = flatten(root.left)
  let rightTree = flatten(root.right)
  root.left = null
  root.right = leftTree
  let lastNodeOfRight = root
  while (lastNodeOfRight.right) {
    lastNodeOfRight = lastNodeOfRight.right
  }
  lastNodeOfRight.right = rightTree
  return root
};
