//question: https://leetcode.com/problems/magnetic-force-between-two-balls/


  /**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    position.sort((a,b) => a-b);

    let start = 1;
    let end = position[position.length-1] - position[0];

    while(start <= end){
        let mid = Math.floor((start+end)/2);

        let count = 1;
        let lastPosition = position[0];

        for(let i=1; i<position.length; i++){
            if(position[i]-lastPosition >= mid){
                count++;
                lastPosition = position[i];
            }
        }

        if(count >= m){
            start = mid+1;
        }else{
            end = mid-1;
        }

    }
    return end;
};