var kthSmallest = function(root, k) {
  let flag = 0
  let res = 0
  let dfs = root => {
    if (!root) {
      return
    }
    dfs(root.left)
    if (k === ++flag) {
      res = root.val
      return
    }
    dfs(root.right)
  }
  dfs(root)
  return res
};
