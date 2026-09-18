//question:https://leetcode.com/problems/minimum-size-subarray-sum/


/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let min = Infinity;
    let left = 0;
    let right = 0;

    while(right < nums.length){

         sum += nums[right];
         right++;

        while(sum >= target){
        min = Math.min(min, right-left)
        sum -= nums[left];
        left++;
       }
    }   
    return min === Infinity ? 0 : min;
};