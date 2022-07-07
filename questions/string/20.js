/**
 * level: 简单
 * 
 * 有效的括号
 * https://leetcode.cn/problems/valid-parentheses/
 * 
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
*/

// 输入：s = "()[]{}"
// 输出：true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(!s) return false
  let stack = []
  const valid = ['{', '}', '[', ']', '(', ')']
  for (const c of s) {
    if(!valid.includes(c)) return false
    if (c === '{' || c === '[' || c === '(') {
      stack.push(c)
    } else {
      let p = stack.pop()
      if((p === '[' && c === ']') || (p === '{' && c === '}') || (p === '(' && c === ')')) {
        continue
      } else return false
      // let temp = []
      // while(stack.length > 0) {
      //   let p = stack.pop()
      //   if((p === '[' && c === ']') || (p === '{' && c === '}') || (p === '(' && c === ')')) {
      //     break
      //   }
      //   temp.push(p)
      // }
      // while(temp.length > 0) stack.push(temp.pop())
    }
  }
  return stack.length === 0
};

const s = "([)]"
console.log(isValid(s));
