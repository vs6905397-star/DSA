//question: https://leetcode.com/problems/majority-element/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
        let k;
    let count=0;

    for(let i=0; i<nums.length; i++){
        if(count == 0){
            k = nums[i];
            count++;
        } else if(k == nums[i]){
            count++;
        } else{
            count--;
        }
    }
    return k;
};

console.log(majorityElement([2,3,4,1,2]));