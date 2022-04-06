var openLock = function(deadends, target) {
  let visited = new Set(deadends)
  let queue = []
  let step = 0
  queue.push('0000')
  if (target === '0000') {
    return 0
  }
  if (visited.has('0000')) {
    return -1
  }
  visited.add('0000')
  while(queue.length) {
    step++
    console.log(visited)
    let len = queue.length
    for (let i = 0; i<len; i++) {
      let cur = queue.shift()
      for (let item of spin(cur)) {
        if (!visited.has(item)) {
          if (target === item) {
            return step
          }
          queue.push(item)
          visited.add(item)
        }
      }
    }
  }
  return -1
}

const spin = str => {
  let ret = []
  let arr = Array.from(str)
  for (let i=0; i<4; i++) {
    let num = arr[i]
    arr[i] = up(num)
    ret.push(arr.join(''))
    arr[i] = down(num)
    ret.push(arr.join(''))
    arr[i] = num
  }
  return ret
}

let up = char => {
  return char === '0' ? '9' : (parseInt(char)-1) + ''
}

let down = char => {
  return char === '9' ? '0' : (parseInt(char)+1) + ''
}
