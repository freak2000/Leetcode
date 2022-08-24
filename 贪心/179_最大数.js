/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let ans = ''
    nums = nums.map(String)
    let cmp = (str1, str2) => {
        return str1+str2 - (str2+str1)
    }
    nums.sort(cmp)
    for (let item of nums) {
        ans = item + ans
    }
    return String(BigInt(ans))
};
