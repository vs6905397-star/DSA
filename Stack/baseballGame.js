//question: https://leetcode.com/problems/baseball-game/

function baseballGame(str){

    let stack = [];
    let sum = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] === "D"){
            stack.push(stack[stack.length -1] * 2)
        } else if(str[i] === "C"){
            stack.pop();
        } else if(str[i] === "+"){
            let last = stack[stack.length-1]
            let second = stack[stack.length-2]

            stack.push(last + second)
        } else{
            stack.push(Number(str[i]))
        }
    }
    
    while(stack.length > 0){
        let num = stack.pop()
        sum = sum + num
    }

    return sum;
}


let s = "52DC+"

console.log(baseballGame(s))

