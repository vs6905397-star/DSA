
//question: https://leetcode.com/problems/sqrtx/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let ans = 0;

    let start = 0;
    let end = x;

    while(start <= end){
        let mid = Math.floor((start+end)/2);

        if(mid * mid <= x){
            ans = mid;
            start = mid+1;
        }else {
            end = mid-1;
        }
    }

    return ans;
};