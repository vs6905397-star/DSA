//question: https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

function adjacentDuplicate(str){
    let stack = [];

    for(let char of str){
        if(char === stack[stack.length-1]){
            stack.pop();
        } else{
            stack.push(char);
        }
    }
    
    return stack.join("");
   
}

console.log(adjacentDuplicate("abbaca"));
