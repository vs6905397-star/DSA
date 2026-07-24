// question: https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(i=0; i<nums.length; i++){
        for(j=i+1; j<nums.length; j++){
            let sum = nums[i] + nums[j]
            if(sum === target){
                return [i,j]
            }
        }
    }
};

console.log(twoSum([1,5,8,9,10,12], 13));