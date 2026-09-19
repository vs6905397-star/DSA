//question: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let firstIdx = -1;
    let lastIdx = -1;

    let start = 0;
    let end = nums.length-1;

    while(start <= end){
        let mid = Math.floor((start + end)/2);

    if(nums[mid] === target){
        firstIdx = mid;
        end = mid-1;
    } else if(nums[mid] > target){
        end = mid-1;
    }else{
        start = mid + 1;
    }
    }

     start = 0;
     end = nums.length-1;

    while(start <= end){
        let mid = Math.floor((start + end)/2);

    if(nums[mid] === target){
        lastIdx = mid;
        start = mid+1;
    } else if(nums[mid] > target){
        end = mid-1;
    }else{
        start = mid + 1;
    }
    }

    return [firstIdx, lastIdx];
};