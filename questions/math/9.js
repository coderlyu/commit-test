/**
 * level: 简单
 * 
 * 回文数
 * https://leetcode.cn/problems/palindrome-number/
 * 
给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

例如，121 是回文，而 123 不是。
 */

// 输入：x = 121
// 输出：true

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let str = String(x)
  for (let i = 0; i < str.length / 2; i++) {
    if(str.charAt(i) !== str.charAt(str.length - 1 - i)) return false
  }
  return true
};

const x = -121

console.log(isPalindrome(x));
