//question: https://leetcode.com/problems/subarray-sums-divisible-by-k/submissions/2161917735/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let map = new Map();
    map.set(0,1);

    let currentSum = 0;
    let count = 0;

    for(let i=0; i<nums.length; i++){
        currentSum += nums[i];
        let reminder = ((currentSum % k) + k)%k;

        if(map.has(reminder)){
            count += map.get(reminder);
        }
        
         map.set(reminder, (map.get(reminder) || 0)+1);
    }
    return count;
};