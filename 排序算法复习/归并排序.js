  let merge_sort = (array) => {
    if (array.length<2) {
      return array
    }
    // 向下取整
    let middle = Math.floor(array.length/2)
    let left = array.slice(0, middle)
    let right = array.slice(middle)
    // 使用递归，把问题规模减小
    return merge(merge_sort(left), merge_sort(right))
  }

  let merge = (left, right) => {
    let res = []
    // 用一个while循环得出两个数组中的最小元素，将其放入res中
    while (left.length>0 && right.length>0) {
      if (left[0]<right[0]) {
        res.push(left.shift())
      } else {
        res.push(right.shift())
      }
    }
    return res.concat(left, right)
  }

  console.log(merge_sort([22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70]))
