/**
 * level: 简单
 * 
 * 最长公共前缀
 * https://leetcode.cn/problems/longest-common-prefix/
 * 
 * 编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。
 */


// 输入：strs = ["flower","flow","flight"]
// 输出："fl"

// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) return ''
  else if (strs.length === 0) return strs[0]
  let str = ''
  let maxLen = Math.max(...strs.map(s => s.length))
  for(let i = 0; i < maxLen; i++) {
    str+=strs[0].charAt(i)
    let flag = false
    for (const s of strs) {
      if(!s.startsWith(str)) {
        flag = true
        break
      }
    }
    if (flag) {
      str = str.slice(0, str.length - 1)
      break
    }
  }
  return str
};

const strs = ["flower","ow","flight"]
console.log(longestCommonPrefix(strs))