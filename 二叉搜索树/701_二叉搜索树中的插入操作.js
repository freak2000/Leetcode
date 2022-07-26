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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (!root) {
        root = new TreeNode(val)
        return root
    }
    if (root.val < val) {
        root.right = insertIntoBST(root.right, val)
    } else {
        root.left = insertIntoBST(root.left, val)
    }
    return root
};

var insertIntoBST = function(root, val) {
    let pre = null
    let backtrace = (root, val) => {
        if (!root) {
            // console.log(val)
            if (val > pre.val) {
                pre.right = new TreeNode(val)
            } else  {
                pre.left = new TreeNode(val)
            }
            return
        }
        pre= root
        if (val > root.val) {
            backtrace(root.right, val)
        } else {
            backtrace(root.left, val)
        }
    }
    if (!root) {
        root = new TreeNode(val)
    } else  {
        backtrace(root, val)
    }
    return root
};