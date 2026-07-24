// question: https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let ans=false;

    for(let i=0; i<nums.length; i++){
        for(let j= i+1;j<nums.length; j++){
            if(nums[i] == nums[j]){
                ans=true;
            }
        }
    }
    return ans;
};

console.log(containsDuplicate([1,2,3,5,8,10,9,9]));