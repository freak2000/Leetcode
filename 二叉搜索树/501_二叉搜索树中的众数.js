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
 * @return {number[]}
 */
var findMode = function(root) {
    let ans = []
    let count = 0
    let pre = null
    let maxNum = -Infinity
    let dfs = root => {
        if (!root) {
            return
        }
        dfs(root.left)
        if (!pre || pre.val === root.val) {
            count++
        } else {
            count = 1
        }
        if (maxNum === count) {
            ans.push(root.val)
        } else if (maxNum < count) {
            maxNum = count
            ans = []
            ans.push(root.val)
        }
        pre = root
        dfs(root.right)
    }
    dfs(root)
    return ans
};