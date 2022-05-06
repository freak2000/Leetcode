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
