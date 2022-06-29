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
    let i = nums.indexOf(target)
    if (i === -1) return -1
    else {
        if (nums.length <= 2) {
            return i
        }
    }
    let len = nums.length - 1
    // i - 1, i, i + 1
    if (i - 1 >=0 && i + 1 <=len) {
        let pre = nums[i - 1], cur = nums[i],next = nums[i + 1], flag = false, L = i - 1, R = i + 1
        if (pre > cur && next > cur) {
            // 左边升序，右边降序
            // 左边
            while(L > 0) {
                if (nums[L - 1] > nums[L]) {
                    flag = true
                    break
                }
                L--
            }
            // 右边
            while(R < len) {
                if (nums[R] < nums[R + 1]) {
                    flag = true
                    break
                }
                R++
            }
        }
        if (flag) return i
    }
    return -1
};
// nums = [1,3], target = 1 ---> 0
// nums = [1,3,5], target = 1 ---> 0
const nums = [1, 3], target = 1 // [4,5,6,7,0,1,2], target = 0 , nums = [1,3], target = 1
console.log(search(nums, target))