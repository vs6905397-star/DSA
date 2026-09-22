//question: https://leetcode.com/problems/max-consecutive-ones-iii/submissions/2145441298/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0;
    let zeroCount = 0;
    let max = 0;

    for(let i=0; i<nums.length; i++){
        if(nums[i] === 0){
            zeroCount++;
        }

        while(zeroCount > k){
            if(nums[left] === 0){
            zeroCount--;
        }
        left++;
        }

        max = Math.max(max, i-left+1);
    }

    return max;
};