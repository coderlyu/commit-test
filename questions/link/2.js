/**
 * level: 中等
 * 两数相加
 * 
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头
 * 
 */

// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let p = null;
  let head = null;
  let pre = 0;
  while (l1 && l2) {
    let total = l1.val + l2.val + pre;
    let val = total % 10;
    pre = Math.floor(total / 10);
    if (!head) {
        head = new ListNode(val)
        p = head
    } else {
        p.next = new ListNode(val);
        p = p.next
    }
    l1 = l1.next;
    l2 = l2.next;
  }
  while (l1) {
    let total = l1.val + pre;
    let val = total % 10;
    pre = Math.floor(total / 10);
    p.next = new ListNode(val);
    p = p.next;
    l1 = l1.next;
  }
  while (l2) {
    let total = l2.val + pre;
    let val = total % 10;
    pre = Math.floor(total / 10);
    p.next = new ListNode(val);
    p = p.next;
    l2 = l2.next;
  }
  if (pre > 0) {
      p.next = new ListNode(pre)
  }
  return head;
};


const l1 = createLink([0])
const l2 = createLink([0])
console.log(traverseLink(addTwoNumbers(l1, l2)))
/**
 * 创建链表
 * @param {*} arr 
 * @returns 
 */
function createLink(arr) {
    let head = null
    let p = null
    arr.forEach((item) => {
        if (!head) {
            head = new ListNode(item)
            p = head
        } else {
            p.next = new ListNode(item)
            p = p.next
        }
    })
    return head
}
/**
 * 遍历链表
 */
function traverseLink(head) {
    const arr = []
    while(head) {
        arr.push(head.val)
        head = head.next
    }
    return arr.toString()
}