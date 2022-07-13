/**
 * level: 中等
 * 
 * 有效的数独
 * https://leetcode.cn/problems/valid-sudoku/
 * 
 * 请你判断一个 9 x 9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
 

注意：

一个有效的数独（部分已被填充）不一定是可解的。
只需要根据以上规则，验证已经填入的数字是否有效即可。
空白格用 '.' 表示。
 */
// 输入：board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// 输出：false
// 解释：除了第一行的第一个数字从 5 改为 8 以外，空格内其他数字均与 示例1 相同。 但由于位于左上角的 3x3 宫内有两个 8 存在, 因此这个数独是无效的。

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  if (board.length === 0) return false;
  let flag = true;
  let map = Array.from({ length: 9 }).map(() => []);
  loop1: for (let i = 0; i < board.length; i++) {
    const ele = board[i];
    loop2: for (let j = 0; j < ele.length; j++) {
      const inner = ele[j];
      if (!(inner >= "1" && inner <= "9")) continue;
      // 横向遍历
      let t = 0;
      while (t < ele.length) {
        if (t !== j && ele[t] === inner) {
          flag = false;
          break loop1;
        }
        t++;
      }
      // 纵向遍历
      let s = 0;
      while (s < board.length) {
        if (s !== i && inner === board[s][j]) {
          flag = false;
          break loop1;
        }
        s++;
      }
    }
  }
  loop3: for (let i = 0; i < board.length; i++) {
    const ele = board[i];
    loop4: for (let j = 0; j < ele.length; j++) {
      const inner = ele[j];
      if (!(inner >= "1" && inner <= "9")) continue;
      // 3 * 3 方向 判断九个粗体实线内的是否合理
      let mapIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      let set = map[mapIdx];
      if (set.includes(inner)) {
        flag = false;
        break loop3;
      }
      set.push(inner);
    }
  }
  return flag;
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
// true
// [
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];
// [
//   [".", ".", "5", ".", ".", ".", ".", ".", "6"],
//   [".", ".", ".", ".", "1", "4", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", "9", "2", ".", "."],
//   ["5", ".", ".", ".", ".", "2", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", "3", "."],
//   [".", ".", ".", "5", "4", ".", ".", ".", "."],
//   ["3", ".", ".", ".", ".", ".", "4", "2", "."],
//   [".", ".", ".", "2", "7", ".", "6", ".", "."],
// ]; // true

// false
// [
//   ["8", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ]

// true
// [
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

// false
// [
//   [".", ".", ".", ".", "5", ".", ".", "1", "."],
//   [".", "4", ".", "3", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", "3", ".", ".", "1"],
//   ["8", ".", ".", ".", ".", ".", ".", "2", "."],
//   [".", ".", "2", ".", "7", ".", ".", ".", "."],
//   [".", "1", "5", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", "2", ".", ".", "."],
//   [".", "2", ".", "9", ".", ".", ".", ".", "."],
//   [".", ".", "4", ".", ".", ".", ".", ".", "."]
// ]
console.log(isValidSudoku(board));
