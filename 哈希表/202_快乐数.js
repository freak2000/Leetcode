var isHappy = function(n) {
  let arr = n.toString().split('')
  let sum = 0
  let set = new Set()
  for (let i = 0; i<arr.length; i++) {
    sum+=Number(arr[i])**2
  }
  while (true) {
    arr = sum.toString().split('')
    sum = 0
    for (let i = 0; i<arr.length; i++) {
      sum+=Number(arr[i])**2
    }
    if (!set.has(sum)) {
      set.add(sum)
    }else if (sum === 1) {
      return true
    } else {
      return false
    }
  }
};
