//question: https://leetcode.com/problems/contiguous-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let map = new Map();
    map.set(0, -1);

    let sum = 0;
    let maxLength = 0;

    for(let i=0; i<nums.length; i++){
        sum += nums[i] === 0 ? -1 : 1;

        if(map.has(sum)){
            let length = i - map.get(sum);

            maxLength = Math.max(maxLength, length);
        } else{
            map.set(sum, i);
        }
    }

    return maxLength;
};