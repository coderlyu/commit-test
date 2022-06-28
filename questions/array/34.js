/**
 * level: 中等
 * 
 * 在排序数组中查找元素的第一个和最后一个位置
 * https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/
 * 
 * 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
 */

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // if (nums.length === 0) return []
    // else if (nums.length === 1) {
    //     return nums[0] === target ? [0, 0] : []
    // }
    let max = -1,min = -1
    // 二分查找
    const find2 = (i, j) => {
        if (i > j) return
        let mid = Math.floor((i + j) / 2)
        if (nums[mid] > target) find2(i, mid - 1)
        else if (nums[mid] < target) find2(mid + 1, j)
        else {
            if (max === -1) max = mid
            else if (mid > max) max = mid
            if (min === -1) min = mid
            else if (mid < min) min = mid
            find2(i, mid - 1)
            find2(mid + 1, j)
        }
    }
    find2(0, nums.length - 1)
    return [min, max]
};



const nums = [], target = 8 // nums = [5,7,7,8,8,10], target = 8
console.log(searchRange(nums, target))