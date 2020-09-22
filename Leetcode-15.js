//15.三树之和
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

//  

// 示例：

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const res = []
    const len = nums.length;
    for(let i = 0; i < len - 2; ){
        for(let j = i + 1, k = len - 1; j < k;){
            let sum = nums[i] + nums[j] + nums[k];
            if(sum < 0){
                j++;
                while(nums[j] === nums[j-1] && j < k){
                    j++;
                }
            }
            else if(sum > 0){
                k--;
                while(nums[k] === nums[k+1] && j < k){
                    k--;
                }
            }
            else{
                res.push([nums[i], nums[j], nums[k]]);
                j++;
                while(nums[j] === nums[j-1] && j < k){
                    j++;
                }
                k--;
                while(nums[k] === nums[k+1] && j < k){
                    k--;
                }
            }
        }
        i++;
        while(nums[i] === nums[i-1] && i < len - 2){
            i++;
        }
    }
    return res;
};