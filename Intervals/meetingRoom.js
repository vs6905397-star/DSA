//question: https://leetcode.com/problems/meeting-rooms/description/



var meetingRoom = function(intervals) {
    intervals.sort((a,b) => a[0]-b[0])
    let i=0;
    let j=i+1;

   for(let i=1; i<intervals.length; i++){
    if(intervals[i][0] < intervals[i-1][1]){
        return false;
    }
   }
    return true;
}

console.log(meetingRoom([[1,5],[6,8],[7,9]]));