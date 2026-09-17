//question: https://leetcode.com/problems/maximum-average-subarray-i/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
    

    for(let i=0; i < k; i++){
        sum += nums[i];
    }
     
     let maxSum = sum;
     for(let j=k; j<nums.length; j++){
        sum += nums[j];
        sum -= nums[j-k];

        maxSum = Math.max(sum, maxSum);
     }
    
    return maxSum/k
};