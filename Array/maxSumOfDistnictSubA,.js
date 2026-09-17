//question: https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/submissions/2144542438/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let map = new Map();
    let sum = 0;
    let max = 0;

    for(let i=0; i<k; i++){
        sum += nums[i];

        map.set(nums[i],
        (map.get(nums[i]) || 0) +1 );
    }

    if(map.size === k){
        max = sum;
    }

    for(let i=k; i<nums.length; i++){
        sum += nums[i];
        map.set(nums[i],
        (map.get(nums[i]) || 0) +1 );

        let old = nums[i-k];

        sum -=old;

        map.set(old, map.get(old) - 1);

        if(map.get(old) === 0){
            map.delete(old);
        }
        
        if(map.size === k){
            max = Math.max(max, sum);
        }
    }

    return max;

};