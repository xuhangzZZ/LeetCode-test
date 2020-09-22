//24.两两交换链表中的节点

// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

//  

// 示例:

// 给定 1->2->3->4, 你应该返回 2->1->4->3.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


 //四指针
var swapPairs = function(head) {
    let p1 = new ListNode(0);
    p1.next = head;
    let p = p1;
    let p2 = p1.next;
    while(p2 && p2.next){
        p3 = p2.next;
        p4 = p3.next;
        p3.next = p2;
        p2.next = p4;
        p1.next = p3;
        p1 = p2;
        p2 = p4;
    }
    return p.next;
};

//递归
var swapPairs = function(head) {
    if(!head || !head.next) return head;
    let p = head.next;
    head.next = swapPairs(p.next);
    p.next = head;
    return p;
};