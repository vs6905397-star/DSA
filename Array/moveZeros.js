//question: https://leetcode.com/problems/move-zeroes/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i];
            j++;
        }
    }
    
    for (let i = j; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
};

console.log(moveZeroes([1,0,2,0,3,0,5,0,6,9,0,0,0]));