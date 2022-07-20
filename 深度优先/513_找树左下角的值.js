// 前序遍历，回溯
var findBottomLeftValue = function(root) {
    let ans = 0
    let temp = 0
    let max = 0
    let dfs = root => {
        if (!root) {
            return
        }
        temp++
        if (!root.left && !root.right) {
            if (max < temp) {
                max = temp
                ans = root.val
            }
        }
        dfs(root.left)
        dfs(root.right)
        temp--
    }
    dfs(root)
    return ans
};