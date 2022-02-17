var isBalanced = function(root) {
  if (!root) {
    return true
  }
  return Math.abs(gao(root.left)-gao(root.right))<=1 && isBalanced(root.left) && isBalanced(root.right)
};

let gao = (root) => {
  if (!root) {
    return 0
  }
  return Math.max(gao(root.left), gao(root.right))+1
}
