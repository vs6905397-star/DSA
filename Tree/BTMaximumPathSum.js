//question: https://leetcode.com/problems/binary-tree-maximum-path-sum/description/


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
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxSum = -Infinity;

    function maxGain(node){
        if(node===null) return 0;

        let left = Math.max(0, maxGain(node.left));

        let right = Math.max(0, maxGain(node.right));

        let currentPath = node.val + left + right;

        maxSum = Math.max(maxSum, currentPath);

        return node.val + Math.max(left, right);

    }
    maxGain(root);

    return maxSum;
    
};