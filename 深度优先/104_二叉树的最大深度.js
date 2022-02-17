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
