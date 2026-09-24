//question: https://leetcode.com/problems/decode-string/submissions/2151527471/


/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    let currentString = "";
    let currentNumber = 0;
 
    for(let char of s){

        if(!isNaN(char)){
            currentNumber = currentNumber * 10 + Number(char);
        } else if(char === "["){
            stack.push([currentNumber, currentString]);
            currentNumber = 0;
            currentString = "";
        }else if(char === "]"){
            let [number, previousString] = stack.pop();

            currentString  = previousString + currentString.repeat(number);
        }else{
            currentString += char;
        }
    }

    return currentString;
};