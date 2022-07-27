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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  let num = 0
  let flag1 = null
  let flag2 = null
  let pre = null
  let dfs = root => {
    if (!root) {
      return
    }
    dfs(root.left)
    if (pre && pre.val>root.val) {
      num++
      if (num === 1) {
        flag1 = pre
        flag2 = root
      } else {
        flag2 = root
      }
    }
    pre = root
    dfs(root.right)
  }
  dfs(root);
  [flag1.val, flag2.val] = [flag2.val, flag1.val]
  return root
};
