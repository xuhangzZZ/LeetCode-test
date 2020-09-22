//25.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let start = dummy;
    let end = dummy.next;
    let count = 0;
    while(end){
        count++;
        if(count % k === 0){
            start = reverse(start, end.next);
            end = start.next;
        }
        else{
            end = end.next;
        }
    }
    return dummy.next;
};

const reverse = (start, end) => {
    let pre = start;
    let cur = start.next;
    let first = cur;
    while(cur !== end){
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    first.next = cur;
    start.next = pre;
    return first;
}