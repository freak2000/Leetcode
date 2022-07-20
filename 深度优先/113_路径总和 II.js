var pathSum = function(root, targetSum) {
  let sum = 0
  let num = []
  let ans = []
  let dfs = root => {
    if (!root) {
      return
    }
    num.push(root.val)
    sum += root.val
    if (sum === targetSum && !root.left && !root.right) {
      ans.push(num.slice(0))
    }
    dfs(root.left)
    dfs(root.right)
    num.pop()
    sum -= root.val
  }
  dfs(root)
  return ans
};
