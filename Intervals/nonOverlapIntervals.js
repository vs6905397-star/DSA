
//question: https://leetcode.com/problems/non-overlapping-intervals/submissions/2164851244/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[0]-b[0]);
    let remove = 0;
    let lastEnd = intervals[0][1];

    for(let i=1; i<intervals.length; i++){
        let start = intervals[i][0];
        let end = intervals[i][1];

        if(start < lastEnd){
            remove++;

            lastEnd = Math.min(lastEnd, end);
        }else{
            lastEnd = end;
        }
    }

    return remove;
};