/**
 * level: 中等
 * 最长回文子串
 * https://leetcode.cn/problems/longest-palindromic-substring/
 * 
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 */

//  输入：s = "babad"
//  输出："bab"
//  解释："aba" 同样是符合题意的答案。

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) return s
    let str = s.charAt(0), j = 1
    // 扩散
    for (let i = 0; i < s.length; i++) {

        // 中间是两个
        if (i + 1 < s.length && s.charAt(i) === s.charAt(i + 1)) {
            j = 1
            while(i - j >=0 && i + j + 1 < s.length && s.charAt(i - j) === s.charAt(i + j + 1)) {
                j++
            }
            if (str.length < 2 * j) {
                str = s.slice(i - j + 1, i +  j + 1)
            }
        }
        // 中间是一个
        if (i - 1 >=0 && i + 1 < s.length) {
            j = 1
            while(i - j >=0 && i + j < s.length && s.charAt(i - j) === s.charAt(i + j)) {
                j++
            }
            j--
            if (str.length < j * 2 + 1) {
                str = s.slice(i - j, i + j + 1)
            }
        }
    }
    return str
}

const str = "ccccd" // cbbd -> bb, babad -> bab | aba, ccd -> cc
console.log(longestPalindrome(str))