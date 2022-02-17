var generateParenthesis = function(n) {
  let ans = []
  if (!n) return []
  function dfs (path, left, right) {
    if (left>n || right>left) {
      return
    }
    if (path.length === 2*n) {
      ans.push(path)
      return
    }
    dfs(path+'(', left+1, right)
    dfs(path+')', left, right+1)
  }
  dfs('', 0, 0)
  return ans
};
