/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
  let ans = []
  let dfs = root => {
    if (!root) {
      return []
    }
    for (let item of root.children) {
      dfs(item)
    }
    ans.push(root.val)
    return ans
  }
  return dfs(root)
};
