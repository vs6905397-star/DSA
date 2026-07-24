/question: https://leetcode.com/problems/remove-element/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums,val) {
   let k=0;
    for(let i=0;i<nums.length; i++){  
            if(nums[i] !== val){
              nums[k] = nums[i];
              k++;
        }
    }
    return k;
};

console.log(removeDuplicates([1,2,1,5,8,2,3],8));