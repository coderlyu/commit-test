/**
 * level: 中等
 * 
 * 最长连续序列
 * https://leetcode.cn/problems/longest-consecutive-sequence/
 * 
 * 
给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 */

// 输入：nums = [100,4,200,1,3,2]
// 输出：4
// 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let map = new Map()
  nums = nums.sort((a, b) => a - b)
  for (const value of nums) {
    if(!map.has(value)) {
      let arr = [value]
      if (!map.has(value + 1)) map.set(value + 1, arr)
    } else {
      let arr = map.get(value)
      arr.push(value)
      map.delete(value)
      map.set(value + 1, arr)
    }
  }
  let maxLen = 0
  
  for (const arr of map.values()) {
    if(arr.length > maxLen) maxLen = arr.length
  }
  return maxLen
};

const nums = [4,0,-4,-2,2,5,2,0,-8,-8,-8,-8,-1,7,4,5,5,-4,6,6,-3] // [100,4,200,1,3,2] // [0,0, -1] // [4,0,-4,-2,2,5,2,0,-8,-8,-8,-8,-1,7,4,5,5,-4,6,6,-3]
console.log(longestConsecutive(nums));
