//88.合并两个有序数组
// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

// 说明:

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
//  

// 示例:

// 输入:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// 输出: [1,2,2,3,5,6]

var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n -1;
    while(p2 >= 0){
        //此处有越界判断，所以报错
        if(nums1[p1] <= nums2[p2]){
            nums1[p] = nums2[p2];
            p2--;
        }
        else{
            nums1[p] = nums1[p1];
            p1--;
        }
        p--;
    }
};



var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n -1;
    while(p2 >= 0){
        //巧过越界判断
        if(nums1[p1] > nums2[p2]){
            nums1[p] = nums1[p1];
            p1--;
        }
        else{
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }
};