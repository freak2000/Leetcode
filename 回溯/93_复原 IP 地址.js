var restoreIpAddresses = function(s) {
  let res = []
  let temp = []
  let dfs = start => {
    if (temp.length === 4 && start !== s.length) {
      return
    }
    if (temp.length === 4 && start === s.length) {
      res.push(temp.join('.'))
    }
    for (let len = 1; len<4; len++) {
      if (start+len > s.length) {
        return
      }
      if (len !== 1 && s[start] === '0') {
        return
      }
      let piece = s.slice(start, start + len)
      if (+piece > 255) {
        return
      }
      temp.push(piece)
      dfs(start+len)
      temp.pop()
    }
  }
  dfs(0)
  return res
};
