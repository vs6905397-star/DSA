//question: https://leetcode.com/problems/valid-parentheses/submissions/2115807930/

function validParentheses(str){

    let stack = [];

    for(let ch of str){
        if(ch === "(" || ch === "[" || ch === "{"){

            stack.push(ch);

        } else if( ch === ")" ){
            if(stack.pop() !== "("){
                return false
            }
        } else if( ch === "]"){
            if(stack.pop() !== "["){
                return false
            }
        } else if( ch === "}"){
            if(stack.pop() !== "{"){
                return false
            }
        }
    }
    return stack.length === 0;
}

console.log(validParentheses("(){}[]"));