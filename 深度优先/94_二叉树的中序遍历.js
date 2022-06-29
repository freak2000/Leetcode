var inorderTraversal = function(root) {
  let ans = []
  function dfs (root) {
    if (!root) {
      return
    }
    dfs(root.left)
    ans.push(root.val)
    dfs(root.right)
  }
  dfs(root)
  return ans
};

var inorderTraversal = function(root) {
  let stack = []
  let res = []
  let cur = root
  while (cur || stack.length) {
    if (cur) {
      stack.push(cur)
      cur = cur.left
    } else {
      cur = stack.pop()
      res.push(cur.val)
      cur = cur.right
    }
  }
  return res
};
