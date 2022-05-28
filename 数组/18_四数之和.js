var fourSum = function(nums, target) {
  nums.sort((left, right) => left - right)
  let res = []
  let set = new Set()
  for (let i = 0; i<nums.length - 3; i++) {
    for (let j = i+1; j < nums.length - 2; j++) {
      let left = j+1
      let right = nums.length - 1
      while (left < right) {
        if (nums[i] + nums[j] + nums[left] + nums[right] === target) {
          if (!res.length || !set.has([nums[i], nums[j], nums[left], nums[right]].toString())) {
            res.push([nums[i], nums[j], nums[left], nums[right]])
            set.add([nums[i], nums[j], nums[left], nums[right]].toString())
          }
          left++
          right--
        } else if (nums[i] + nums[j] + nums[left] + nums[right] < target) {
          left++
        } else {
          right--
        }
      }
    }
  }
  return res
};


var fourSum = function(nums, target) {
  nums.sort((left, right) => left - right)
  let res = []
  for (let i = 0; i<nums.length - 3; i++) {
    while (i>0 && i<nums.length-3 && nums[i] === nums[i-1]) {
      i++
      continue
    }
    for (let j = i+1; j < nums.length - 2; j++) {
      while (j > i+1 && j<nums.length-2 && nums[j] === nums[j-1]) {
        j++
        continue
      }
      let left = j+1
      let right = nums.length - 1
      while (left < right) {
        if (nums[i] + nums[j] + nums[left] + nums[right] === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]])
          left++
          while (nums[left] === nums[left-1] && left<nums.length-1) {
            left++
          }
          right--
          while (nums[right] === nums[right+1] && right>left) {
            right--
          }
        } else if (nums[i] + nums[j] + nums[left] + nums[right] < target) {
          left++
          while (nums[left] === nums[left-1] && left<nums.length-1) {
            left++
          }
        } else {
          right--
          while (nums[right] === nums[right+1] && right>left) {
            right--
          }
        }
      }
    }
  }
  return res
};
