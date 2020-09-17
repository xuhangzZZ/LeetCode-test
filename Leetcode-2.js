//2.两数相加
// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const l3 = new ListNode(0);

    let p1 = l1;
    let p2 = l2;
    let p3 = l3;
    let sur = 0;
    while(p1 || p2){
        const v1 = p1? p1.val: 0;
        const v2 = p2? p2.val: 0;
        const v3 = v1 + v2 + sur;
        sur = Math.floor(v3 / 10);
        p3.next = new ListNode(v3 % 10)
        if(p1) p1 = p1.next;
        if(p2) p2 = p2.next;
        p3 = p3.next;
    }
    if(sur){
        p3.next = new ListNode(1);
    }
    return l3.next;
};
