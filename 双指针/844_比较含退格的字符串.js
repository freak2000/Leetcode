// 重新构建字符串
var backspaceCompare = function(s, t) {
  let ss = ''
  let tt = ''
  for (let i = 0; i<s.length; i++) {
    if (s[i] !== '#') {
      ss+=s[i]
    } else {
      ss = ss.slice(0, ss.length-1)
    }
  }
  for (let i = 0; i<t.length; i++) {
    if (t[i] !== '#') {
      tt+=t[i]
    } else {
      tt = tt.slice(0, tt.length-1)
    }
  }
  return ss===tt
};

// 双指针法
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  let sindex = s.length-1
  let sflag = 0
  let tindex = t.length-1
  let tflag = 0
  while (sindex>=0 || tindex>=0) {
    while(sindex>=0) {
      if (s[sindex] === '#') {
        sindex--
        sflag++
      } else if (sflag) {
        sindex--
        sflag--
      } else {
        break
      }
    }
    while(tindex>=0) {
      if (t[tindex] === '#') {
        tindex--
        tflag++
      } else if (tflag) {
        tindex--
        tflag--
      } else {
        break
      }
    }
    if (sindex>=0 && tindex>=0) {
      if (s[sindex] !== t[tindex]) {
        return false
      }
    } else {
      if (sindex>=0 || tindex>=0) {
        return false
      }
    }
    sindex--
    tindex--
  }
  return true
};
