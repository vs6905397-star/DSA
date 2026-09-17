//question: https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/


/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let sum = 0;
    let count = 0;
    let target = k*threshold;

    for(let i=0; i<k; i++){
        sum += arr[i];
    }

    for(let j=k; j<=arr.length; j++){
        if(sum >= target){
            count++;
        }
        sum += arr[j];
        sum -= arr[j-k];
    } 

    return count;

};