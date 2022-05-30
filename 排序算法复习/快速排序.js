let quick_sort = (array, start, end) => {
  if (start>end) {
    return
  }
  let index = partition(array, start, end)
  quick_sort(array, start, index-1)
  quick_sort(array, index+1, end)
  return array
}

let partition = (array, start, end) => {
  // 定义一个数字pivot作为基准，用pivotIndex来跟踪其位置，用pivotValue来跟踪其值
  let pivotIndex = start
  let pivotValue = array[end]
  for(let i=start; i<end; i++) {
    // 把所有比基准的值小的元素移到其位置的左边
    if (array[i]<pivotValue) {
      [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]]
      pivotIndex++
    }
  }
  // 最后一步把基准（最后一个元素）与 在pivotIndex位置的值交换
  [array[end], array[pivotIndex]] = [array[pivotIndex], array[end]]
  return pivotIndex
}
console.log(quick_sort([22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70],0,13))
