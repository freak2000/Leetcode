/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let set = new Set()
  for (let i = 1; i<=nums.length; i++) {
    set.add(i)
  }
  for (let i = 0; i<nums.length; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i])
    }
  }
  return [...set]
};
