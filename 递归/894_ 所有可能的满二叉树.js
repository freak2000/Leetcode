var allPossibleFBT = function(n) {
  if (n%2 === 0) {
    return []
  }
  let memory = new Array(n)
  let tree = n => {
    let res = []
    if (n===1) {
      res.push(new TreeNode(0))
      return res
    }
    for(let i=1; i<n; i+=2) {
      let j = n-i-1
      let leftTree = tree(i)
      let rightTree = tree(j)
      for (left of leftTree) {
        for (right of rightTree) {
          res.push(new TreeNode(0, left, right))
        }
      }
    }
    memory[n] = res
    return res
  }
  return tree(n)
};
