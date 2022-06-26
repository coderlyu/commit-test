/**
 * level: 中等
 * 
 * 最接近的三数之和
 * https://leetcode.cn/problems/3sum-closest/
 * 
 * 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

返回这三个数的和。

假定每组输入只存在恰好一个解。

 */

// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if (nums.length < 3) return 0
    nums = nums.sort((a, b) => a - b)
    let L = 0, R = nums.length
    let min
    let sum
    for (let i = 0; i < nums.length - 2; i++) {
        const element = nums[i];
        L = i + 1
        R = nums.length - 1
        while(L < R) {
            const sum = element + nums[L] + nums[R]
            if (typeof min === 'undefined') min = sum
            else if (Math.abs(target - sum) < Math.abs(target - min)) min = sum
            if(sum >= target)R--
            else L++
        }
    }
    return min
};

const nums = [ -1, 0, 1], target = 100 // -4, -1, 1, 2 .... -3, 0, 1, 2

console.log(threeSumClosest(nums, target))