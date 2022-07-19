var isSameTree = function(p, q) {
    let com = (le, ri) => {
        if (!le) {
            return !ri
        }
        if (!ri) {
            return !le
        }
        return le.val === ri.val && com(le.left, ri.left) && com(le.right, ri.right)
    }
    return com(p, q)
};