/**
 * level: 中等
 * 
 * 盛最多水的容器
 * https://leetcode.cn/problems/container-with-most-water/
 * 
给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

返回容器可以储存的最大水量。
 */

// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49
// 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (height.length <= 1) return 0;
  let i = 0;
  let j = height.length - 1;
  let max = 0;
  while (i < j) {
    let left = height[i];
    let right = height[j];
    if (max < (j - i) * Math.min(left, right))
      max = (j - i) * Math.min(left, right);
    if (left < right) i++;
    else j--;
  }
  return max;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));
