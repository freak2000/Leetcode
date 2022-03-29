var lowestCommonAncestor = function(root, p, q) {
  if (root === p || root === q) return root
  if (!root) return null
  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p ,q)
  if (left && right) return root
  if (!left && !right) return null
  return left ? left : right
};
