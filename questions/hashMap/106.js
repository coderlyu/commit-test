/**
 * level: 中等
 * 
 * 从中序与后序遍历序列构造二叉树
 * https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 * 
 * 
给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。
 */

// 输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// 输出：[3,9,20,null,null,15,7]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  function buildChildTree(array) {
    if (array.length === 0 || postorder.length === 0) return null
    let value = postorder[postorder.length - 1] // 去最后一个
    let idx = array.indexOf(value)
    if(idx === -1) return null
    let leftArr = array.slice(0, idx)
    let rightArr = array.slice(idx + 1)
    let node = new TreeNode(postorder.pop())
    if(rightArr.length >0) node.right = buildChildTree(rightArr)
    if(leftArr.length >0) node.left = buildChildTree(leftArr)
    return node
  }
  return buildChildTree(inorder)
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// const inorder = [9, 3, 15, 20, 7],
//   postorder = [9, 15, 7, 20, 3];

const inorder = [2,1], postorder = [2,1]
console.log(buildTree(inorder, postorder));
