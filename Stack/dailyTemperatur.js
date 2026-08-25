//question: https://leetcode.com/problems/daily-temperatures/submissions/2117045767/

function dailyTemp(temp){
     let stack = [];
     let answer = new Array(temp.length).fill(0);

     for(let i= 0; i < temp.length; i++){
       while(stack.length > 0 && temp[i] > temp[stack[stack.length-1]]){
        let idx = stack.pop();

        answer[idx] = i-idx;
       }

       stack.push(i);
     }
     return answer;
}

console.log(dailyTemp([50,90,70,80,100]))