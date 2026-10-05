//question: https://leetcode.com/problems/subarray-sum-equals-k/submissions/2161912305/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = new Map();
    map.set(0,1);

    let currentSum = 0;
    let count = 0;

    for(let i=0; i<nums.length; i++){
        currentSum += nums[i];
        let neededSum = currentSum - k 

        if(map.has(neededSum)){
            count += map.get(neededSum);
        }
        
         map.set(currentSum, (map.get(currentSum) || 0)+1);
    }
    return count;
};