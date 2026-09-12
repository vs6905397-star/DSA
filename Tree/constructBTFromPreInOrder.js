// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let preIndex = 0;

    function build(left, right){
        if(left > right) return null;

        let root = new TreeNode(preorder[preIndex]);
        preIndex++;

        let mid = inorder.indexOf(root.val);

        root.left = build(left, mid-1);
        root.right = build(mid+1, right);

        return root;
    }
    return build(0, inorder.length - 1);
};