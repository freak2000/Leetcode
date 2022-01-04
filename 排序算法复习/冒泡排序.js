let bubble_sort = (array) => {
  let length = array.length
  for (let i = 0; i<length-1; i++) {
    for (let j = 0; j<length-1-i; j++) {
      if (array[j]>array[j+1]) {
        // 这里用了es6的解构赋值， 不用创建一个临时的变量来存放值
        [array[j], array[j+1]] = [array[j+1], array[j]]
      }
    }
  }
  console.log(array)
  return array
}

let num = [22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70];
bubble_sort(num)
