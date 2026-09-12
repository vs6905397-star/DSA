//question: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/submissions/2139070874/


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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(root === null) return [];
    
    let queue = [root];
    let result = [];
    let front = 0;
    let leftToRight = true;

    while(front < queue.length){
        let level = [];
        let size = queue.length - front;

        for(let i=0; i< size; i++){
            let node = queue[front++];

            level.push(node.val);

            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        if(!leftToRight){
            level.reverse();
        }

        result.push(level);
        leftToRight = !leftToRight;
    }
    return result;
};
