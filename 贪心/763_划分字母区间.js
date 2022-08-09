/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let ans = []
    let map = new Map()
    for (let i = 0; i<s.length; i++) {
        map.set(s[i], i)
    }
    let ri = 0
    let le = 0
    for (let i = 0; i<s.length; i++) {
        ri = Math.max(ri, map.get(s[i]))
        if (ri === i) {
            ans.push(ri-le+1)
            le = ri+1
        }
    }
    return ans
};
