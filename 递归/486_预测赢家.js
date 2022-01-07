var PredictTheWinner = function(nums) {
  // 建立选择函数
  let select = (le, ri) => {
    if(le === ri) {
      return nums[le]
    }
    // 递推关系
    return Math.max(nums[le]-select(le+1, ri), nums[ri]-select(le, ri-1))
  }
  return select(0, nums.length-1) >=0
}

PredictTheWinner([1,5,2])
