/**
 * level: 简单
 * 
 *  二叉树的中序遍历
 * https://leetcode.cn/problems/binary-tree-inorder-traversal/
 * 
给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

//  输入：root = [1,null,2,3]
//  输出：[1,3,2]

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  function inorder(head, result) {
    if(!head) return []
    inorder(head.left, result)
    result.push(head.val)
    inorder(head.right, result)
    return result
  }
  return inorder(root, [])
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
let root = [1, null, 2, 3];
function createTreeNode(root) {
  let head = null
  function createTree(val) {
    if(val === null || val === undefined) return null
    if(root.length < 0) return null
    const node = new TreeNode(val)
    node.left = createTree(root.shift())
    node.right = createTree(root.shift())
    return node
  }
  head = createTree(root.shift())
  return head
}
root = createTreeNode(root)
console.log(inorderTraversal(root));
