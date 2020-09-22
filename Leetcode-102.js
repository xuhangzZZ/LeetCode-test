//102.二叉树的层序遍历
// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

//  

// 示例：
// 二叉树：[3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：

// [
//   [3],
//   [9,20],
//   [15,7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */


//广度优先 优化
var levelOrder = function(root) {
    if(!root) return[];
    const q = [root];
    let len = q.length;
    const res = [];
    while(q.length){
        res.push([]);
        while(len--){
            const n = q.shift();
            res[res.length-1].push(n.val);
            n.left && q.push(n.left);
            n.right && q.push(n.right);
        }
    }
    return res;
};

//广度优先遍历
var levelOrder = function(root) {
    if(!root) return[];
    const q = [[root,0]];
    const res = [];
    while(q.length){
        const [n,l] = q.shift();
        if(!res[l]){
            res.push([]);
        }
        else{
            res[l].push[n.val];
        }
        n.left && q.push([n.left,l+1]);
        n.right && q.push([n.right,l+1]);
    }
    return res;
};