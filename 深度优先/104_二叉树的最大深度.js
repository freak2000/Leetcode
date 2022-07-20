// 前序遍历
var maxDepth = function(root) {
  let max = 0
  let level = 0
  function dfs (root) {
    if (!root) {
      return
    }
    level++
    max = Math.max(level, max)
    dfs(root.left)
    dfs(root.right)
    level--
  }
  dfs(root)
  return max
};


// 后序遍历
var maxDepth = function(root) {
  if (!root) {
    return 0
  }
  return 1+Math.max(maxDepth(root.left), maxDepth(root.right))
};
