//question: https://leetcode.com/problems/product-of-array-except-self/submissions/2160743430/



/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefix = [1];

    for(let i=1; i<nums.length; i++){
        prefix[i] = prefix[i-1] * nums[i-1];
    }

    let suffix = [];
    suffix[nums.length-1] = 1;

    for(let i=nums.length-2; i>=0; i--){
        suffix[i] = suffix[i+1] * nums[i+1];
    }

    let result = [];

    for(let i=0; i< nums.length; i++){
        result[i] = prefix[i] * suffix[i];
    }

    return result;
};



///best approch 

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answer = [1];

    for(let i=1; i<nums.length; i++){
        answer[i] = answer[i-1] * nums[i-1];
    }

    let suffix = 1;

    for(let i= nums.length-1; i>=0; i--){
        answer[i] *= suffix;

        suffix *= nums[i];
    }

    return answer;
};