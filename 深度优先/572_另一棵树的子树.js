var isSubtree = function(root, subRoot) {
    if (!root) {
        return !subRoot
    }
    if (!subRoot) {
        return !root
    }
    return com(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};
let com = (le, ri) => {
    if (!le) {
        return !ri
    }
    if (!ri) {
        return !le
    }
    return le.val === ri.val && com(le.left, ri.left) && com(ri.right, le.right)
}