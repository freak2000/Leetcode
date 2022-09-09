/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    let index1 = 0
    let index2 = 0
    let count = 0
    while (index1<s.length && index2<t.length) {
        if (s[index1] === t[index2]) {
            count++
            index1++
        }
        index2++
    }
    return count === s.length
};