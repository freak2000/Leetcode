var preorderTraversal = function(root) {
  let ans = []
  let dfs = root => {
    if (!root) {
      return
    }
    ans.push(root.val)
    dfs(root.left)
    dfs(root.right)
  }
  dfs(root)
  return ans
};
