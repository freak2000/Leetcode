/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let rest = 0
    for (let i = 0; i<nums.length; i++) {
        rest--
        rest = Math.max(rest, nums[i])
        if (rest === 0 && i !== nums.length-1) {
            return false
        }
    }
    return true
};
