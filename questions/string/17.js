/**
 * level: 中等
 * 
 * 电话号码的字母组合
 * https://leetcode.cn/problems/letter-combinations-of-a-phone-number/
 * 
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 */

// 输入：digits = "23"
// 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const keyMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  if (!digits) return []
  const array = []
  for (const c of digits) {
    array.push(keyMap[c])
  }
  let result = []
  function digui(array, str = '') {
    if (!Array.isArray(array)) return
    let arr = array.shift()
    arr.forEach(c => {
      if(array.length > 0) {
        digui([...array], str + c)
      } else {
        result.push(str + c)
      }
    })
  }
  digui(array, '')
  return result
};

const digits = "2349"
console.log(letterCombinations(digits));
