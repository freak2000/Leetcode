var findContentChildren = function(g, s) {
    g.sort((a, b) => a-b)
    s.sort((a, b) => a-b)
    let j = 0
    let i = 0
    for (; j<s.length; j++) {
        if (i === g.length) {
            return i
        }
        if (g[i] <= s[j]) {
            i++
        }
    }
    return i
}
