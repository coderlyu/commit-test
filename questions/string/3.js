/**
 * level: 中等
 * 
 * 无重复字符的最长子串
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/
 * 
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 */

//  输入: s = "abcabcbb"
//  输出: 3 
//  解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) return s.length
    const arr = new Array(s.length).fill(0)
    for(let i = 0; i < s.length; i++) {
        let c = s.charAt(i)
        let pre = i - 1 >= 0 ? arr[i - 1] : 0
        let L = i - pre
        let R = i - 1
        let flag = false
        while(L >= 0 && R >= L) {
            if(s.charAt(R) === c) {
                flag = true
                break
            }
            R--
        }
        if (!flag) arr[i] = pre + 1
        else {
            if (i - 1 < 0) {
                arr[i] = 1
            } else  arr[i] = i - R
        }
    }
    return Math.max(...arr)
};

const str = "abcabcbb" // bbbbb, abcabcbb, au, "dvdf"

console.log(lengthOfLongestSubstring(str))