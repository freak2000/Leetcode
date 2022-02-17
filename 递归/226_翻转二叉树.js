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
