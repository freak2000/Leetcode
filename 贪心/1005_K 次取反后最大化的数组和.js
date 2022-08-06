var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a, b) => a-b)
    for (let i = 0; i<nums.length && k>0; k--, i++) {
        nums[i] = (-1)*nums[i]
        if (i+1<nums.length && nums[i+1] > 0 && nums[i+1] > nums[i]) {
            i--
        }
    }
    if (k) {
        while(k) {
            nums[nums.length-1] *= -1
            k--
        }
    }
    let ans = 0
    for (let item of nums) {
        ans+=item
    }
    return ans
};
