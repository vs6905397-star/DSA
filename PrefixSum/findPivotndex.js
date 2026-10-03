//question: https://leetcode.com/problems/find-pivot-index/submissions/2160692743/


/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let totalSum = nums.reduce((sum, n) => sum+n, 0);
    let leftSum = 0;

    for(let i=0; i<nums.length; i++){
        let rightSum = totalSum - leftSum - nums[i];

        if(leftSum === rightSum){
            return i;
        }

        leftSum += nums[i];
    }
    return -1;
};