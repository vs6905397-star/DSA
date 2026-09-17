//question: https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/


/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let totalSum = 0;
    
    for(let i=0; i<cardPoints.length; i++){
        totalSum += cardPoints[i];
    }

    let pointSum = 0;
    let n = cardPoints.length - k;
    
    for(let i=0; i<n; i++){
        pointSum += cardPoints[i];
    }

    let min = pointSum;

    for(let i=n; i<cardPoints.length; i++){
        pointSum += cardPoints[i];
        pointSum -= cardPoints[i-n];

        min = Math.min(min, pointSum)
    }

    return totalSum - min;
};