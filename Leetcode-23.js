//23.合并k个升序链表
// 给你一个链表数组，每个链表都已经按升序排列。

// 请你将所有链表合并到一个升序链表中，返回合并后的链表。

// 示例 1：

// 输入：lists = [[1,4,5],[1,3,4],[2,6]]
// 输出：[1,1,2,3,4,4,5,6]
// 解释：链表数组如下：
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// 将它们合并到一个有序链表中得到。
// 1->1->2->3->4->4->5->6
// 示例 2：

// 输入：lists = []
// 输出：[]
// 示例 3：

// 输入：lists = [[]]
// 输出：[]
// 提示：

// k == lists.length
// 0 <= k <= 10^4
// 0 <= lists[i].length <= 500
// -10^4 <= lists[i][j] <= 10^4
// lists[i] 按 升序 排列
// lists[i].length 的总和不超过 10^4

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

class MinHeap{
    constructor(){
        this.heap = [];
    }

    swap(pindex, index){
        let tem = this.heap[pindex];
        this.heap[pindex] = this.heap[index];
        this.heap[index] = tem;
    }

    getParentIndex(index){
        return (index - 1) >> 1;
    }

    getLeftIndex(index){
        return index * 2 + 1;
    }

    getRightIndex(index){
        return index * 2 + 2;
    }

    shiftUp(index){
        const parentIndex = this.getParentIndex(index);
        if(this.heap[parentIndex] && this.heap[parentIndex].val > this.heap[index].val){
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex);
        }
    }

    shiftDown(index){
        const leftIndex = this.getLeftIndex(index);
        const RightIndex = this.getRightIndex(index);
        if(this.heap[leftIndex] && this.heap[leftIndex].val < this.heap[index].val){
            this.swap(index, leftIndex);
            this.shiftDown(leftIndex);
        }
        if(this.heap[RightIndex] && this.heap[RightIndex].val < this.heap[index].val){
            this.swap(index, RightIndex);
            this.shiftDown(RightIndex);
        }
    }

    insert(value){
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }

    //删除堆顶
    pop(){
        if(this.size() === 1) return this.heap.shift();;
        const tem = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
        return tem;
    }

    //获取堆顶元素
    peek(){
        return this.heap[0];
    }

    //计算堆大小
    size(){
        return this.heap.length;
    }
}

//堆
var mergeKLists = function(lists) {
    const h = new MinHeap();
    const res = new ListNode(0);
    let p = res;
    lists.forEach(n => {
        n && h.insert(n);
    })
    while(h.size()){
        let t = h.pop(); 
        p.next = t;
        p = p.next;
        t.next && h.insert(t.next);
    }
    return res.next;
};

//分而治之
var mergeKLists = function (lists) {
    
    if (lists.length <= 1) return lists[0] || null;
    const newLists = [];
    for (let i = 0; i < lists.length; i += 2) {
      newLists.push(merge(lists[i], lists[i + 1] || null));
    }
    return mergeKLists(newLists);
  };
  
  const merge = (list_1, list_2) => {
    const sentinelNode = new ListNode(0);
    let p = sentinelNode;
  
    while (list_1 && list_2) {
      if (list_1.val < list_2.val) {
        p.next = list_1;
        list_1 = list_1.next;
      } else {
        p.next = list_2;
        list_2 = list_2.next;
      }
      p = p.next;
    }
  
    p.next = list_1 ? list_1 : list_2;
    return sentinelNode.next;
  };
  
//   作者：jiuyueqingchen
//   链接：https://leetcode-cn.com/problems/merge-k-sorted-lists/solution/fen-er-zhi-zhi-by-jiuyueqingchen/
//   来源：力扣（LeetCode）
//   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。