
//question:https://leetcode.com/problems/grumpy-bookstore-owner/

    /**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    let happy = 0;

    for(let i=0; i<grumpy.length; i++){
         if(grumpy[i] === 0){
        happy += customers[i];
         }
    }

    let extra = 0;
  
    for(let i=0; i<minutes; i++){
        if(grumpy[i] === 1){
            extra += customers[i];
        }
    }

    let max = extra;
    for(let i=minutes; i<grumpy.length; i++){
        if(grumpy[i] === 1){
        extra += customers[i];
        }

        if(grumpy[i-minutes] === 1){
        extra -= customers[i-minutes];
        }
        
        max = Math.max(max,extra);
    }

    return happy+max;
};