//question: https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/

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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let arr = [];

    function inorder(root){
        if(root){
        
       inorder(root.left);
       arr.push(root.val)
       inorder(root.right);
    }
    }
    inorder(root);

    return arr[k-1];
};


/// another solution 

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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count = 0;
    let answer = 0;

    function inorder(node){
        if(node === null) return;
  
       inorder(node.left);
       count++;
       if(count === k){
        answer = node.val;
        return
       }
       
       inorder(node.right);
    
    }
    inorder(root);

    return answer;
};