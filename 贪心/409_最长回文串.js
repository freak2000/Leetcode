/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    s = s.split('')
    s.sort()
    let ans = 0
    let single = 0
    let tag = 0
    for (let i = 0; i<s.length; i++) {
        if (i === 0 || s[i] !== s[i-1]) {
            single = 1
            tag++
        } else if (s[i] === s[i-1] && single === 1) {
            console.log(s[i])
            single = 0
            ans+=2
            tag--
        } else if (s[i] === s[i-1] && single === 0) {
            single = 1
            tag++
        }
    }
    if (tag) {
        ans++
    }
    return ans
};
