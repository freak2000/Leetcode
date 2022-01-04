let shell_sort = (array) => {
  for(let gap = array.length>>1; gap>0; gap>>=1) {
    for(let i = gap; i<array.length; i++) {
      let temp = array[i],j
      for(j = i-gap; j>=0 && array[j]>temp; j-=gap) {
        array[j+gap] = array[j]
      }
      array[j+gap] = temp
    }
  }
  console.log(array)
  return array
}
shell_sort([22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70])
