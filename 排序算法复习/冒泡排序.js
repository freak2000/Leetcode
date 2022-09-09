let bubble_sort = array => {
  let length = array.length
  for (let i = 0; i<length-1; i++) {
    // 若此轮遍历发现数组是顺序的，则直接推出循环
    var flag = true
    for (let j = 0; j<length-1-i; j++) {
      if (array[j]>array[j+1]) {
        flag = false;
        [array[j], array[j+1]] = [array[j+1], array[j]]
      }
    }
    if (flag) {
      break
    }
  }
  return array
}

let num = [22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70];
console.log(bubble_sort(num));
