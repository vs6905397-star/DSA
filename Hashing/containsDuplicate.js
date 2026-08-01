//question : https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let ans=false;
    
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            return ans = true;
            
        }
        map.set(nums[i]);
    }
    return ans;
};