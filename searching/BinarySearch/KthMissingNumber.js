//question: https://leetcode.com/problems/kth-missing-positive-number/

  /**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let start = 0;
    let end = arr.length-1;

    while(start <= end){
        let mid = Math.floor((start+end)/2);
        let missing = arr[mid] - mid -1;
 
        if(missing >= k){
            end = mid-1;
        }else{
            start = mid +1;
        }
    }

    return k+start;
};