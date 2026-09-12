//question: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root === null) return null;

    if(root === p || root === q) return root;

    let leftResult = lowestCommonAncestor(root.left, p, q);
    let rightResult = lowestCommonAncestor(root.right, p, q);

    if(leftResult && rightResult) return root;
    if(leftResult) return leftResult
    if(rightResult) return rightResult

    return null
};