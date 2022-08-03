var wiggleMaxLength = function(nums) {
    let preDiff = 0
    let curDiff = 0
    let ans = 1
    for (let i = 1; i<nums.length; i++) {
        curDiff = nums[i] - nums[i-1]
        if ((preDiff <=0 && curDiff > 0) || (preDiff >= 0 && curDiff < 0)) {
            ans++
            preDiff = curDiff
        }
    }
    return ans
};
