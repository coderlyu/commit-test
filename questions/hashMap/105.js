/**
 * level: 中等
 * 
 * 从前序与中序遍历序列构造二叉树
 * https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * 
 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历，
inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
 */

// 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// 输出: [3,9,20,null,null,15,7]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let head = null
  // 先序遍历确定根节点
  // 中序遍历确定根节点左右两边的值
  function buildChildTree(array) {
    if(preorder.length <=0 || array.length <=0) return null
    let idx = array.indexOf(preorder[0])
    if (idx === -1) return null
    let nodeVal = preorder.shift()
    let node = new TreeNode(nodeVal)
    // 左子树
    node.left = buildChildTree(array.slice(0, idx))
    // 右子树
    node.right = buildChildTree(array.slice(idx + 1 - array.length))
    return node
  }
  head = buildChildTree(inorder)
  return head
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const preorder = [3, 9, 20, 15, 7],
  inorder = [9, 3, 15, 20, 7];
console.log(buildTree(preorder, inorder));
