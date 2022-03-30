var convertBST = function(root) {
  let sum = 0
  let dfs = root => {
    if (!root) {
      return
    }
    dfs(root.right)
    sum += root.val
    root.val = sum
    dfs(root.left)
  }
  dfs(root)
  return root
};
