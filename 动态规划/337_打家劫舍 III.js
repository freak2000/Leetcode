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

// 超时代码
var rob = function(root) {
  if (!root) return 0
  let val1 = 0
  val1+=root.val
  if (root.left) val1 = val1 + rob(root.left.left) + rob(root.left.right)
  if (root.right) val1 = val1 + rob(root.right.right) + rob(root.right.left)
  let val2 = 0
  val2+=rob(root.left)
  val2+=rob(root.right)
  return Math.max(val2, val1)
};