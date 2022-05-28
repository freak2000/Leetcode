var containsDuplicate = function(nums) {
  let arr = [...new Set(nums)]
  return arr.length !== nums.length
};
