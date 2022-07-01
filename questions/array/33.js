/**
 * level: 中等
 * 
 * 搜索旋转排序数组
 * https://leetcode.cn/problems/search-in-rotated-sorted-array/
 * 
 * 整数数组 nums 按升序排列，数组中的值 互不相同 。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。
*/

// 输入：nums = [4,5,6,7,0,1,2], target = 0
// 输出：4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // 一半有序，一半可能有序
    let L = 0, R = nums.length - 1, mid
    while (L <= R) {
        mid = Math.floor(L + (R - L) / 2)
        if(nums[mid] === target) return mid
        if(nums[L] <= nums[mid]) {
            // 升序
            if (nums[L] <= target && target < nums[mid]) {
                // 升序 --- 有序
                R = mid - 1
            } else {
                L = mid + 1
            }
        } else {
            // 降序或无序
            if (mid < target && target <= nums[R]) {
                L = mid + 1
            } else {
                R = mid - 1
            }
        }
    }
    return -1
};
// nums = [1,3], target = 1 ---> 0
// nums = [1,3,5], target = 1 ---> 0
const nums = [3,4,5,6,1,2], target = 2 // [4,5,6,7,0,1,2], target = 0 , nums = [1,3], target = 1
console.log(search(nums, target))
