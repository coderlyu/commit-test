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
    let min = 0
    let sum = 0
    for (let i = 0; i < nums.length - 2; i++) {
        const element = nums[i];
        L = i + 1
        R = nums.length - 1
        while(L < R) {
            const sum = element + nums[L] + nums[R]
            if (Math.abs(sum - target) < min) {
                do {
                    if (Math.abs(element + nums[L] + nums[R] - target) < min) {
                        min = Math.min(, min)
                    }
                    if (sum - target > 0) {
                        R--
                    } else {
                        L++
                    }
                } while(L < R)
            } else if (sum - target > 0) R--
            else L++
        }
    }
    return min
};

const nums = [-1,2,1,-4], target = 1

console.log(threeSumClosest(nums, target))