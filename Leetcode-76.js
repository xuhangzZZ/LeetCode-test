//76.最小覆盖子串
// 给你一个字符串 S、一个字符串 T 。请你设计一种算法，可以在 O(n) 的时间复杂度内，从字符串 S 里面找出：包含 T 所有字符的最小子串。

// 示例：

// 输入：S = "ADOBECODEBANC", T = "ABC"
// 输出："BANC"

// 提示：

// 如果 S 中不存这样的子串，则返回空字符串 ""。
// 如果 S 中存在这样的子串，我们保证它是唯一的答案。


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    //双指针，滑动窗口 + 字典
    const need = new Map();
    let r = 0;
    let l = 0;
    let res = '';
    for(let c of t){
        need.set(c, need.has(c)? need.get(c)+1: 1); //将目标字符和各自数量存入字典
    }

    while(r < s.length){    //移动右指针
        const c1 = s[r]
        let needCount = need.size;
        if(need.has(c1)){
            need.set(c1,need.get(c1) - 1);
            if(need.get(c1) === 0){     //不能小于等于
                needCount--;
            }
        }
        while(needCount === 0){     //滑动窗口中已包含目标子串时，移动左指针
            let newRes = s.substring(l, r + 1);
            if(res.length === 0 || res.length > newRes.length) res = newRes;
            const c2 = s[l];
            if(need.has(c2)){
                need.set(c2, need.get(c2) + 1);
                if(need.get(c2) === 1){
                    needCount++;
                }
            }
            l++;
        }
        r++
    }
    return res;
};