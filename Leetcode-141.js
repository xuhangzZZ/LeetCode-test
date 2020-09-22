//141.环形链表
// 给定一个链表，判断链表中是否有环。

// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

// 如果链表中存在环，则返回 true 。 否则，返回 false 。

//  

// 进阶：

// 你能用 O(1)（即，常量）内存解决此问题吗？

 

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    //快指针能否追上慢指针
    let s = head;
    p = head? head.next: null;
        while(p){
            if(p === s) return true;
            p = p.next;
            if(p === null) return false;
            if(p === s) return true;
            p = p.next;
            s = s.next;
        }
     return false;
};


var hasCycle = function(head) {
    //快指针能否追上慢指针
    let p1 = head;
    let p2 = head;
    while(p1 && p2 && p2.next){
        p1 = p1.next;;
        p2 = p2.next.next;
        if(p1 === p2) return true;
    }
    return false;
};


//字典
var hasCycle = function(head) {
    const map = new Map();
    let p = head;
    while(p){
        if(map.has(p)) return true;
        map.set(p, 1);
        p = p.next;
    }
    return false;
};

//instance原理，遍历原型链
 
const instanceOf = (a, b) => {
    let p = a;
    while(p){
        if(p === b.prototype) return true;
        p = p.__proto__;
    }
    return false;
}


