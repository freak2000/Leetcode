let heap_sort = arr => {
  let len = arr.length
  let buildMaxHeap = () => {
    for (let i = Math.floor(len/2); i>=0; i--) {
      heapify(i)
    }
  }
  let heapify = index => {
    let left = index*2+1
    let right = index*2+2
    let largest = (left < len && arr[left] > arr[index]) ? left:index
    largest = (right < len && arr[right] > arr[left]) ? right : largest
    if (largest !== index) {
      [arr[index], arr[largest]] = [arr[largest], arr[index]]
      heapify(largest)
    }
  }

  buildMaxHeap()
  for (let i = arr.length-1; i>0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]]
    len--
    heapify(0)
  }
  return arr
}

console.log(heap_sort([5,52,0,63,996,22,12]))
