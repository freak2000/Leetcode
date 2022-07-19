var maxDepth = function(root) {
  if (!root) {
    return 0
  }
  let ans = 0
  for (let item of root.children) {
    ans = Math.max(ans, maxDepth(item))
  }
  return ans+1
};
