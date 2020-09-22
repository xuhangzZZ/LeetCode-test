//111.二叉树的最小深度

// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明: 叶子节点是指没有子节点的节点。

// 示例:

// 给定二叉树 [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最小深度  2.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

 //深度优先遍历  适合求最小深度 
var minDepth = function(root) {
    let res = 0;
    const dfs = (root, l) => {
        if(!root) return;
        if(!root.left && !root.right){
            if(!res || res > l) res = l;
        }
        root.left && dfs(root.left, l+1);
        root.right && dfs(root.right, l+1);
    }
    dfs(root ,1);
    return res;
};


//广度优先遍历  适合求最大深度 
var minDepth = function(root) {
    if(!root) return 0;
    const q = [[root,1]];
    while(q.length){
        const [n,l] = q.shift();
        if(!n.left && !n.right) return l;
        n.left && q.push([n.left,l+1]);
        n.right && q.push([n.right,l+1]);
    }
};