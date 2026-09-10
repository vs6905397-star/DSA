//question: https://leetcode.com/problems/diameter-of-binary-tree/


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
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;

    function height(root){
        if(root === null){
            return 0;
        }

        let left = height(root.left);
        let right = height(root.right);

        maxDiameter = Math.max(maxDiameter, left+right);

        return Math.max(left,right) +1;
    }
    height(root);

    return maxDiameter
};