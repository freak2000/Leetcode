
var twoSum = function(nums, target) {
  // 建立一个对象来存储映射关系
  let map = {}
  for (let i=0; i<nums.length; i++) {
    let dir = target - nums[i]
    if (map[dir] !== undefined) {
      return [map[dir], i]
    }
    map[nums[i]] = i
  }
};
// 用了一个map来模拟js中的数据结构map,
//   用来存储数组下标与值之间的映射关系，
// 从而降低时间复杂度
