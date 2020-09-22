//146.LRU缓存机制
// 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。

// 获取数据 get(key) - 如果关键字 (key) 存在于缓存中，则获取关键字的值（总是正数），否则返回 -1。
// 写入数据 put(key, value) - 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字/值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。


// 进阶:

// 你是否可以在 O(1) 时间复杂度内完成这两种操作？ 

// 示例:

// LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // 返回  1
// cache.put(3, 3);    // 该操作会使得关键字 2 作废
// cache.get(2);       // 返回 -1 (未找到)
// cache.put(4, 4);    // 该操作会使得关键字 1 作废
// cache.get(1);       // 返回 -1 (未找到)
// cache.get(3);       // 返回  3
// cache.get(4);       // 返回  4



//双向链表+哈希表
var ListNode = function(key,value){
    this.key = key;
    this.value = value;
    this.next = null;
    this.pre = null;
}


/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.length = 0;
    this.cache = {};
    
    this.virtualHead = new ListNode();
    this.virtualTail = new ListNode();
    this.virtualHead.next = this.virtualTail;
    this.virtualTail.pre = this.virtualHead;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let node = this.cache[key];
    if(!node) return -1;
    this.moveToHead(node);
    return node.value;
};
LRUCache.prototype.moveToHead = function(node){
    this.delNode(node);
    this.addToHead(node);
}
LRUCache.prototype.delNode = function(node){
    const temPre = node.pre;
    const temNext = node.next;
    temPre.next = temNext;
    temNext.pre = temPre; 
}
LRUCache.prototype.addToHead = function(node){
    this.virtualHead.next.pre = node;
    node.next = this.virtualHead.next;
    node.pre = this.virtualHead;
    this.virtualHead.next = node;
}
/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.cache[key];
    const newNode = new ListNode(key, value);
    if(!node){
        this.addToHead(newNode);
        this.cache[key] = newNode;
        this.length++;
        if(this.length > this.capacity){
            const tail = this.delTail();
            delete this.cache[tail.key];
            this.length--;
        }
    }
    else{
        this.cache[key] = newNode;
        this.delNode(node);
        this.addToHead(newNode);
    }
};

LRUCache.prototype.delTail = function(){
    const tail = this.virtualTail.pre;
    this.virtualTail.pre = tail.pre;
    tail.pre.next = this.virtualTail;
    return tail;
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */