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
 * @return {boolean}
 */

// 中序遍历
var isValidBST = function(root) {
    let max = -Infinity
    let dfs = root => {
        if (!root) {
            return true
        }
        let le = dfs(root.left)
        if (root.val > max) {
            max = root.val
        } else {
            return false
        }
        let ri = dfs(root.right)
        return le && ri
    }
    return dfs(root)
};