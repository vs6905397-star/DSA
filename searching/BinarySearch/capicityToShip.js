//question: https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/


/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let start = Math.max(...weights);
    let end = weights.reduce((sum, weight)=>sum+weight, 0);

    while(start <= end){
        let mid = Math.floor((start+end)/2)
        let currentWeight = 0;
        let daysNeeded = 1;

        for(let weight of weights){
            if(currentWeight + weight <= mid){
                currentWeight += weight;
            }else{
                daysNeeded++;
                currentWeight = weight;
            }
        }

        if(daysNeeded <= days){
            end = mid-1;
        }else{
            start = mid+1;
        }
    }

    return start;
};