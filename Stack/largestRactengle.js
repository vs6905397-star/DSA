//question:https://leetcode.com/problems/largest-rectangle-in-histogram/submissions/2151514002/


 /**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    heights.push(0);
    let stack = [];
    let maxArea = 0

    for(let i=0; i<heights.length; i++){
         
        while(stack.length > 0 &&  heights[stack[stack.length-1]] > heights[i]){
            let height = heights[stack.pop()];

            let width;
            if(stack.length === 0){
                width = i;
            }else{
                width = i- stack[stack.length-1] -1;
            }

            let area = height * width;
            maxArea = Math.max(maxArea, area);
        }
        stack.push(i);

    }
    return maxArea;
};