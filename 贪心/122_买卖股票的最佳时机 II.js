var maxProfit = function(prices) {
    let ans = 0
    let cur = 0
    let pre = null
    for (let item of prices) {
        cur = item
        if (pre!==null && cur - pre > 0) {
            ans+=cur-pre
        }
        pre = cur
    }
    return ans
};
