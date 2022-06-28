/**
 * level: 中等
 * 
 * 下一个排列
 * https://leetcode.cn/problems/next-permutation/
 * 
 * 整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。

例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。

例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
给你一个整数数组 nums ，找出 nums 的下一个排列。

必须 原地 修改，只允许使用额外常数空间。
*/

// 输入：nums = [1,1,5]
// 输出：[1,5,1]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length < 2) return nums;
  let L = nums.length - 2,
    R = nums.length - 1;
  // 左边最小数
  while (L >= 0 && nums[L] >= nums[L + 1]) L--;
  if (L >= 0) {
    while(R >= 0 && nums[R] <= nums[L]) R--
    swap(nums, L, R)
    let i = L + 1,
    j = nums.length - 1
    while(i < j) {
      swap(nums, i, j)
      i++
      j--
    }
  } else {
    // 没有找到，直接返回最小序列
    // 翻转数组
    let i=0, j = nums.length - 1
    while(i < j) {
      swap(nums, i, j)
      i++
      j--
    }
  }
  return nums;
};

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const nums = [1, 3, 2]; // [3,2,1], [1,2,3], [1,1,5], [1,3,2]
console.log(nextPermutation(nums));

const map = new Map([
  [0, [3, 2, 1]],
  [1, [1, 2, 3]],
  [2, [1, 1, 5]],
  [3, [1, 3, 2]],
]);

map.forEach((key) => {
    console.log(`${key}----> ${nextPermutation(key)}`)
})