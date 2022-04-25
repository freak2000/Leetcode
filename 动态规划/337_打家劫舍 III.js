let dp = new Map()
var rob = function(root) {
  if (!root) return 0
  if (dp.has(root)) {
    return dp.get(root)
  }
  let steal = root.val
  let no = rob(root.left)+rob(root.right)
  if (root.left) {
    steal+=rob(root.left.left)
    steal+=rob(root.left.right)
  }
  if (root.right) {
    steal+=rob(root.right.right)
    steal+=rob(root.right.left)
  }
  dp.set(root, Math.max(steal, no))
  return dp.get(root)
};
