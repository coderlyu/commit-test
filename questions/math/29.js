/**
 * level: 中等
 * 
 * 两数相除
 * https://leetcode.cn/problems/divide-two-integers/
 * 
给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。

返回被除数 dividend 除以除数 divisor 得到的商。

整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2
 */

// 输入: dividend = 10, divisor = 3
// 输出: 3
// 解释: 10/3 = truncate(3.33333..) = truncate(3) = 3

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if(divisor=== 0) return 0
  let max = Math.pow(2, 31) - 1
  let prefix = (dividend > 0 ? 1 : -1) * (divisor > 0 ? 1 : -1)
  let truncate = 0
  dividend = dividend < 0 ? dividend * -1 : dividend
  divisor = divisor < 0 ? divisor * -1 : divisor
  while(dividend >= divisor) {
    dividend-=divisor
    truncate++
    let temp = divisor
    let idx = 1
    while(dividend>=temp) {
      dividend -= temp
      truncate += idx
      idx *= 2
      temp *= 2
    }
  }
  let result = prefix * truncate
  if(result > max || result < -1 * max - 1) return max
  return result
};

const dividend = 7000, divisor = -3
 // 7, -3
console.log(divide(dividend, divisor));
