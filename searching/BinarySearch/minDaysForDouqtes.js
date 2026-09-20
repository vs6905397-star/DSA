//question:https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/submissions/2147411350/

/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    if(bloomDay.length < m*k){
        return -1;
    }

    let start = Math.min(...bloomDay);
    let end = Math.max(...bloomDay);

    while(start <= end){
        let mid = Math.floor((start+end)/2);

        let flowers = 0;
        let bouquets = 0;

        for(let day of bloomDay){
            if(day <= mid){
                flowers++;

                if(flowers === k){
                    bouquets++;
                    flowers = 0;
                }
            }else{
                flowers = 0;
            }
        }


        if(bouquets >= m){
            end = mid - 1;
        } else{
            start = mid + 1;
        }
    }

    return start;
};