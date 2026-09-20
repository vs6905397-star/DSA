
//question: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/submissions/2147288111/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0;
    let end = nums.length - 1;

    while(start < end){
        let mid = Math.floor((start + end)/2);

        if(nums[start] === nums[mid] && nums[mid] === nums[end]){
            start++;
            end--;
            continue;
        }
        else if(nums[end] < nums[mid]){
            start = mid+1;
        } else{
            end = mid;
        }
    }

    return nums[start];
};