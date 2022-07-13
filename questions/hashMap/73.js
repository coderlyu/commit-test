/**
 * level: 中等
 * 
 * 矩阵置零
 * https://leetcode.cn/problems/set-matrix-zeroes/
 * 
给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 「原地」 算法。
 */

// 输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
// 输出：[[1,0,1],[0,0,0],[1,0,1]]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  // 获取所有 0 的位置
  let map = []
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let item = matrix[i][j]
      if (item === 0) {
        map.push([i, j])
      }
    }
  }
  // 对原数组置 0
  map.forEach(([i, j]) => {
    let t = 0, s = 0
    while(t < matrix.length) {
      matrix[t][j] = 0
      t++
    }
    while(s < matrix[i].length) {
      matrix[i][s] = 0
      s++
    }
  })
  return matrix
};

const matrix = [[1], [0]]
// 1
// 输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
// 输出：[[1,0,1],[0,0,0],[1,0,1]]
// 2
// 输入：matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// 输出：[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
console.log(setZeroes(matrix));
