var mergeTrees = function(root1, root2) {
    if (!root2) {
        return root1
    }
    if (!root1) {
        return root2
    }
    let node = new TreeNode(root2.val+root1.val)
    node.left = mergeTrees(root1.left, root2.left)
    node.right = mergeTrees(root2.right, root1.right)
    return node
};