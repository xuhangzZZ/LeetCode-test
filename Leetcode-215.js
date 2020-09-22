//215.数组中第k个最大元素

// 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

// 示例 1:

// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
// 示例 2:

// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4
// 说明:

// 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
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
        if(this.heap[parentIndex] > this.heap[index]){
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex);
        }
    }

    shiftDown(index){
        const leftIndex = this.getLeftIndex(index);
        const RightIndex = this.getRightIndex(index);
        if(this.heap[index] > this.heap[leftIndex]){
            this.swap(index, leftIndex);
            this.shiftDown(leftIndex);
        }
        if(this.heap[index] > this.heap[RightIndex]){
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
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
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

//计算数组中第k个最大或者最小元素，均可以考虑用堆
var findKthLargest = function(nums, k) {
    const h = new MinHeap();
    nums.forEach(i => {
        h.insert(i);
        if(h.size() > k){
            h.pop();
        }
    })
    return h.peek();
};