//3.无重复字符的最长字串
// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。


/**
 * @param {string}
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //双指针 滑动窗口
    const map = new Map();
    let l = 0;
    let res = 0
    for(let r = 0; r < s.length; r++){
        if(map.has(s[r]) && map.get(s[r]) >= l){
            l = map.get(s[r]) + 1;
        }
        res = res > (r-l+1) ? res : r-l+1;
        map.set(s[r],r)
    }
    return res;
};