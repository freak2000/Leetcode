/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let ans = -Infinity
    let temp = 0
    for (let item of nums) {
        temp+=item
        if (temp > ans) {
            ans = temp
        }
        if (temp<0) {
            temp = 0
        }
    }
    return ans
};
