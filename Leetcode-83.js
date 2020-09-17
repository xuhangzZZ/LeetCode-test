//83.删除排序链表中的重复元素
// 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

// 示例 1:

// 输入: 1->1->2
// 输出: 1->2
// 示例 2:

// 输入: 1->1->2->3->3
// 输出: 1->2->3

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
var deleteDuplicates = function(head) {

    // 单指针
    let p = head;
    while(p && p.next){
        if(p.val === p.next.val){
            p.next = p.next.next;
        }
        else{
            p = p.next;
        }
    }
    return head;

    //双指针

    // let p1 = head;
    // let p2 = head? head.next: null;
    // while(p1 && p2){
    //     if(p1.val == p2.val){
    //         p1.next = p2.next;
    //         p2 = p1.next; 
    //     }
    //     else{
    //         p1 = p2;
    //         p2 = p2.next;
    //     }
    // }
    // return head;
};