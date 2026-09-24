//question: https://leetcode.com/problems/next-greater-element-ii/submissions/2151485719/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let n = nums.length;
    let result = new Array(n).fill(-1);
    let stack = [];

    for(let i=2*n-1; i>=0; i--){
        let index = i%n;

        while(stack.length > 0 && nums[stack[stack.length-1]] <= nums[index]){
            stack.pop();
        }

        if(stack.length > 0){
            result[index] = nums[stack[stack.length-1]]
        }

        stack.push(index);
    }

    return result;
};