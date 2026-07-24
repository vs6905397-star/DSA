//question : https://leetcode.com/problems/find-pivot-index/
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    for(let j=0;j<nums.length;j++){
    let rs=0;
    let ls=0;
    for(let i=j;i<nums.length;i++){
        rs = rs + nums[i];
    }
    for(let i=j;i>=0;i--){
        ls = ls + nums[i];
    }
    if(rs == ls){
        return j;
    } }
    return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]));