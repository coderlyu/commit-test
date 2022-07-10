/**
 * level: 中等
 * 
 * 字母异位词分组
 * https://leetcode.cn/problems/group-anagrams/
 * 
 * 
 * 
给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。
 */

// 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  if (strs.length < 2) return strs
  let map = new Map()
  for (const str of strs) {
    let strArr = str.split('')
    strArr.sort((a, b) => a - b)
    strJoin = strArr.join('')
    if(!map.has(strJoin)) {
      map.set(strJoin, [str])
    } else {
      let setArr = map.get(strJoin)
      if(!strArr.includes(str)) strArr.push(str)
    }
  }
  let result = []
  console.log(map.entries())
  return result
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs));
