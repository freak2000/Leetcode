// 普通方法
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  let ans = 0
  for (let i = left; i<=right; i++) {
    ans += this.nums[i]
  }
  return ans
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */


// 利用前缀和

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums
  this.presum = new Array(nums.length+1).fill(0)
  for (let i = 1; i<=nums.length; i++) {
    this.presum[i] = nums[i-1] + this.presum[i-1]
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  return this.presum[right+1] - this.presum[left]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
