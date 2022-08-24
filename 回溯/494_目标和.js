var findTargetSumWays = function(nums, target) {
    let sum = 0
    let backtrace = (index, total) => {
        if (index === nums.length) {
            if (total === target) {
                sum++
            }
            return
        }
        backtrace(index+1, total+nums[index])
        backtrace(index+1, total-nums[index])
    }
    backtrace(0, 0)
    return sum
};
