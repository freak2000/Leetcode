let selection_sort = (array) => {
  let length = array.length
  let minIndex
  for (let i = 0; i<length-1; i++) {
    minIndex = i
    for(let j = i+1; j<length; j++) {
      if (array[j]<array[minIndex]) {
        minIndex = j
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]]
  }
  console.log(array)
  return array
}

selection_sort([22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70])
