/**
 * level: 中等
 * 
 * 整数反转
 * https://leetcode.cn/problems/reverse-integer/
 * 
给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）。
 */


// 输入：x = 123
// 输出：321

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let prefix = x >= 0 ? 1 : -1
  let max = Math.pow(2, 31) - 1
  let min = -Math.pow(2, 31)
  x = String(x)
  let arr = x.split('')
  for (let i = 0; i < arr.length / 2; i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
  }
  let str = arr.join('')
  let number = parseInt(str) * prefix
  if(number>max || number < min) return 0
  return number
};

const x = +120
console.log(reverse(x));
