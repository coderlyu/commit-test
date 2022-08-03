/**
 * level: 中等
 * 
 * 字符串相乘
 * https://leetcode.cn/problems/multiply-strings/
 * 
给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。
 */

// 输入: num1 = "2", num2 = "3"
// 输出: "6"


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if(num1 === '0' || num2 === '0') return '0'
  let result = new Array(num1.length + num2.length + 1).fill(0)
  for (let i = 0; i < num1.length; i++) {
    const c1 = num1.charAt(i)
    for (let j = 0; j < num2.length; j++) {
      const c2 = num2.charAt(j)
      const count = c1 * c2
      const idx = (num1.length - 1 - i) + (num2.length - 1 - j)
      result[idx] += count % 10
      result[idx + 1] +=  Math.floor(count / 10)
    }
  }
  const bigNumberAdd = (pre, cur, i) => {
    let curStr = cur + '0'.repeat(i)
    let result = []
    let prefix = 0
    let maxLen = Math.max(pre.length, curStr.length)
    pre = pre.padStart(maxLen, '0')
    curStr = curStr.padStart(maxLen, '0')
    for (let i = maxLen - 1; i >=0 ; i--) {
      const c1 = pre.charAt(i) ? pre.charAt(i) : '0'
      const c2 = curStr.charAt(i) ? curStr.charAt(i) : '0'
      const num = prefix + parseInt(c1) + parseInt(c2)
      result.push(num % 10)
      prefix = Math.floor(num / 10)
    }
    if(prefix) {
      result.push(prefix)
    }
    return result.reverse().join('')
  }
  let _result = String(result.reduce(bigNumberAdd, '0'))
  while(_result.startsWith('0')) {
    _result = _result.slice(1)
  }
  return _result
};

const num1 = "123", num2 = "456"

// 123 * 456 = 56088
// 98 * 9 = 882
// "123456789" * "987654321" = "121932631112635269"
console.log(multiply(num1,num2));
