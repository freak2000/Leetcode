var preorder = function(root) {
  let ans = []
  let dfs = root => {
    if (!root) {
      return
    }
    ans.push(root.val)
    for (const item of root.children) {
      dfs(item)
    }
  }
  dfs(root)
  return ans
};
