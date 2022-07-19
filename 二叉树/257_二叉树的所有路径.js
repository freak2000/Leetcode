var binaryTreePaths = function(root) {
  if (!root) return []
  let set = []
  let str = []
  let dfs = root => {
    if (!root) return
    if (!root.left && !root.right) {
      str.push(root.val)
      let ss = str.join('->')
      set.push(ss)
      str.pop()
      return
    }
    str.push(root.val)
    dfs(root.left)
    dfs(root.right)
    str.pop()
    return
  }
  dfs(root)
  return set
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let ans = []
  let temp = ''
  let backtrace = root => {
    console.log(temp)
    if (!root) {
      console.log('dd')
      return
    }
    if (!root.left && !root.right) {
      temp+=root.val
      ans.push(temp)
      temp-=root.val
      return
    }
    let ss = temp
    temp = temp + root.val +'->'
    if (root.left) {
      backtrace(root.left)
    }
    if (root.right) {
      backtrace(root.right)
    }
    temp = ss
  }
  backtrace(root)
  return ans
};