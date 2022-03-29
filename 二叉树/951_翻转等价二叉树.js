var flipEquiv = function(root1, root2) {
  if (!root2 && !root1) {
    return true
  }
  if (!root2 || !root1) {
    return false
  }
  if (root1.val !== root2.val) {
    return false
  }
  return (flipEquiv(root2.left, root1.left) && flipEquiv(root1.right, root2.right)) || (flipEquiv(root2.left, root1.right) && flipEquiv(root2.right, root1.left))
};
