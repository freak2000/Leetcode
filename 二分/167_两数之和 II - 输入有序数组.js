var twoSum = function(numbers, target) {
  for (let i = 0; i<numbers.length; ++i) {
    let le = i+1
    let ri = numbers.length-1
    while (le <= ri) {
      let mid = Math.floor((le+ri)/2)
      if (numbers[i] + numbers[mid] === target) {
        return [i+1, mid+1]
      } else if (numbers[i] + numbers[mid] <= target) {
        le = mid+1
      } else {
        ri = mid-1
      }
    }
  }
  return [-1,-1]
};
