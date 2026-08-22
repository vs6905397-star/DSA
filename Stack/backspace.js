//question: https://leetcode.com/problems/backspace-string-compare/description/

function backspace(str1, str2){
    let stack1 = [];
    let stack2 = [];

    for(let char of str1){
        if(char === "#"){
            stack1.pop()
        } else{
            stack1.push(char)
        }
    }

     for(let char of str2){
        if(char === "#"){
            stack2.pop()
        } else{
            stack2.push(char)
        }
    }
    
    if(stack1.join("") === stack2.join("")){
        return true;
    } else { 
        return false;
    }
    
}

console.log(backspace("ab#c","adb#c"))