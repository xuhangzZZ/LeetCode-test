//349.两个数组交集 
// 给定两个数组，编写一个函数来计算它们的交集。

//  

// 示例 1：

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]
// 示例 2：

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]
//  

// 说明：

// 输出结果中的每个元素一定是唯一的。
// 我们可以不考虑输出结果的顺序。


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

 //集合
var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const res = new Set([...set1].filter(item => nums2.includes(item)));
    return [...res];
};

//字典
var intersection = function(nums1, nums2) {
    const map = new Map();
    let res = [];
    nums1.forEach(item => {
        map.set(item, true);
    }) 
    nums2.forEach(item => {
        if(map.get(item)){
            res.push(item);
            map.delete(item)
        }
    })
    return res;
};



//利用集合进行数组去重
const arr = [1,1,2,2];
const arr2 = [...new Set(arr)];

//判断元素在不在集合中
const set = new Set(arr);
const res = set.has(1);

//集合交集 
const arr3 = [2,3,4];
const set2 = new Set(arr3);
const result = new Set([...set].filter(item => set2.has(item)));

//集合Set的add方法可添加任何类型数据，但当添加对象时会添加对象的地址，所以添加对象并不重复
let myset = new Set();
myset.add(1);
myset.add('xxx');
myset.add({a:1,b:2});
myset.add({a:1,b:2});
//删除
myset.delete(1);
//求长度
myset.size();

//Set转Array
const myarr = [...set]; 
const myarr = Array.from(set); 