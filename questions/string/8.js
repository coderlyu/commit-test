/**
 * level: 中等
 * 
 * 字符串转换整数 (atoi)
 * https://leetcode.cn/problems/string-to-integer-atoi/
 * 
 * 请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。

函数 myAtoi(string s) 的算法如下：

读入字符串并丢弃无用的前导空格
检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。
读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。
将前面步骤读入的这些数字转换为整数（即，"123" -> 123， "0032" -> 32）。如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。
如果整数数超过 32 位有符号整数范围 [−2^31,  2^31 − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −2^31 的整数应该被固定为 −2^31 ，大于 2^31 − 1 的整数应该被固定为 2^31 − 1 。
返回整数作为最终结果。
注意：

本题中的空白字符只包括空格字符 ' ' 。
除前导空格或数字后的其余字符串外，请勿忽略 任何其他字符。
 */

// 输入：s = "   -42"
// 输出：-42
// 解释：
// 第 1 步："   -42"（读入前导空格，但忽视掉）
//             ^
// 第 2 步："   -42"（读入 '-' 字符，所以结果应该是负数）
//              ^
// 第 3 步："   -42"（读入 "42"）
//                ^
// 解析得到整数 -42 。
// 由于 "-42" 在范围 [-231, 231 - 1] 内，最终结果为 -42 。


/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  if(!s.length) return 0
  s = s.trim()
  let str = ''
  let direction = ''
  for (const c of s) {
    if ((c === '-' || c === '+')) {
      if (direction === '')
        direction = c
      else if(direction !== '') break
    } else if (c >= '0' && c <= '9') {
      str+=c
      if (direction === '') direction = '+'
    }
    else break
  }
  direction = direction === '-' ? -1 : 1
  let result = direction * parseInt(str)
  if (result <= Math.pow(-2,31)) return Math.pow(-2,31)
  else if (result >= Math.pow(2,31) - 1) return Math.pow(2,31) - 1
  return isNaN(result) ? 0 : result
};

const str = "  +  413" // "4193 with words";  "   -42"; 214748364721; "-"; "-0002"; "-+12"; "  +  413"
console.log(myAtoi(str));