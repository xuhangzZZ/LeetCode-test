//347.前k个高频元素
// 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

//  

// 示例 1:

// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]
// 示例 2:

// 输入: nums = [1], k = 1
// 输出: [1]
//  

// 提示：

// 你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
// 你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。
// 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。
// 你可以按任意顺序返回答案。


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
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
        if(this.heap[parentIndex] && this.heap[parentIndex].value > this.heap[index].value){
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex);
        }
    }

    shiftDown(index){
        const leftIndex = this.getLeftIndex(index);
        const RightIndex = this.getRightIndex(index);
        if(this.heap[leftIndex] && this.heap[leftIndex].value < this.heap[index].value){
            this.swap(index, leftIndex);
            this.shiftDown(leftIndex);
        }
        if(this.heap[RightIndex] && this.heap[RightIndex].value < this.heap[index].value){
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



var topKFrequent = function(nums, k) {
    if(!nums) return
    const h = new MinHeap();
    const map = new Map();
    nums.forEach(i => {
        map.has(i) ? map.set(i, map.get(i) + 1) : map.set(i, 1);
    })
    map.forEach((value, key) => {
            h.insert({key, value});
            if(h.size() > k) h.pop();
    })
    return h.heap.map(n => n.key);
};