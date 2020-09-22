//94.二叉树的中序遍历
// 给定一个二叉树，返回它的中序 遍历。

// 示例:

// 输入: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// 输出: [1,3,2]
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//递归
var inorderTraversal = function(root) {
    let res = [];
    const inorder = root => {
        if(!root) return;
        root.left && inorder(root.left);
        res.push(root.val);
        root.right && inorder(root.right);
    }
    inorder(root);
    return res;
};

//非递归
var inorderTraversal = function(root) {
    const q = [];
    let p = root;
    const res = []
    while(p || q.length){
        while(p){
            q.push(p);
            p = p.left;
        }
        const n = q.pop();
        res.push(n.val);
        p = n.right;
    } 
    return res;
};