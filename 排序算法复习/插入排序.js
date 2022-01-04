let insertion_sort = (array) => {
  let length = array.length
  for(let i=1; i<length; i++) {
    console.log(array[i])
    let key = array[i]
    let j = i-1
    while (j>=0 && array[j]>key) {
      array[j+1] = array[j]
      j--
    }
    array[j+1] = key
  }
  console.log(array)
  return array
}

insertion_sort([22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70])
