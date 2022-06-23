/**
 * level：简单
 * 
 * 两数之和
 * https://leetcode.cn/problems/two-sum/
 * 
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 */

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    if (nums.length === 0) return []
    if (nums.length === 1) {
        return nums[0] === target ? nums : []
    }
    const maps = new Map()
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i]
        const b = target - element
        if (maps.has(b)) {
            return [i, maps.get(b)[0]].sort((a, b) => a - b)
        } else {
            maps.set(element, [i])
        }
    }
    return []
};

var nums = [2,7,11,15]
var target = 1

console.log(twoSum(nums, target))