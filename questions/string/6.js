/**
 * level: 中等
 * 
 * Z 字形变换
 * https://leetcode.cn/problems/zigzag-conversion/
 * 
 * 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

P   A   H   N
A P L S I I G
Y   I   R
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

请你实现这个将字符串进行指定行数变换的函数：
 */

// 输入：s = "PAYPALISHIRING", numRows = 4
// 输出："PINALSIGYAHRPI"
// 解释：
// P     I    N --- 0
// A   L S  I G --- 1
// Y A   H R    --- 2
// P     I      --- 3


// 4-

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (s.length <= numRows) return s
    const result = []
    let direction = 1
    let i = 0
    for (const c of s) {  
        if (!result[i]) {
            result[i] = ''
        }
        result[i] = result[i] + c
        i += direction
        if(i === 0 || i === numRows - 1) direction = -direction
    }
    return result.join('')
};

const str = "PAYPALISHIRING"
console.log(convert(str, 4))