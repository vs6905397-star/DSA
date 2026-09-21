//question: https://leetcode.com/problems/single-element-in-a-sorted-array/


   /**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let start = 0;
    let end = nums.length-1;

    while(start < end){
        let mid = Math.floor((start+end)/2);

        if(mid%2 !== 0){
            mid = mid-1;
        }

        if(nums[mid] !== nums[mid+1]){
            end = mid;
        }else{
            start = mid+2;
        }
    }

    return nums[start];
};