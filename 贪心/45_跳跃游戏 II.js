/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let ans = 0
    let curRange = 0
    let nextRange = 0
    for (let i = 0; i<nums.length-1; i++) {
        nextRange = Math.max(nextRange, i+nums[i])
        if (curRange === i) {
            curRange = nextRange
            ans++
        }
    }
    return ans
};
