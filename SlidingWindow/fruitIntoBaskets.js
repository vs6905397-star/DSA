//question: https://leetcode.com/problems/fruit-into-baskets/


/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let left = 0;
    let map = new Map();
    let max = 0;

    for(let i=0; i<fruits.length; i++){

         map.set(fruits[i], (map.get(fruits[i]) || 0) + 1);

        while(map.size > 2){
            let fruit = fruits[left];

            map.set(fruit, map.get(fruit)-1);

            if(map.get(fruits[left]) === 0){
                map.delete(fruit);
            }
            left++;
        }
        max = Math.max(max, i-left+1);
    }

    return max;
};