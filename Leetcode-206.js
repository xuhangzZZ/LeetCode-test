//206.反转链表

// 反转一个单链表。

// 示例:
// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
// 进阶:
// 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

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
var reverseList = function(head) {
    //双指针，每两个进行反转，反转后各自向后移动一步
    let p1 = head;
    let p2 = null;
    while(p1){
        let tem = p1.next;
        p1.next = p2;
        p2 = p1;
        p1 = tem;
    }
    return p2;
};


//尾递归
var reverseList = function(head) {
    const reverse = (pre, cur) => {
        if(!cur) return pre;
        const tem = cur.next;
        cur.next = pre;
        return reverse(cur, tem);
    }
    return reverse(null, head);
};