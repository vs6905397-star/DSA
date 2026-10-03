//question: https://leetcode.com/problems/find-the-middle-index-in-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let totalSum = nums.reduce((sum, n)=> sum+n, 0);
    let leftSum = 0;

    for(let i=0; i<nums.length; i++){
        let rightSum = totalSum - leftSum - nums[i];

        if(rightSum === leftSum){
            return i;
        }

        leftSum += nums[i];
    }
    return -1;
};