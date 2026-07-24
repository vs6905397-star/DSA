// power x of n 
//question: https://leetcode.com/problems/powx-n/description/

let pow = function(n, x) {
    if(x === 0) return 1;

    if(x < 0){
        let ans = 1;
        ans = 1 / pow(n, Math.abs(x));

        return ans;
    }

    let ans = 1;
     
     ans = pow(n, Math.floor(x/2));

    if(x % 2 === 0){
        ans = ans * ans;
    } else {
        ans = n * ans *ans;
    }

    return ans;
}

console.log(pow(2.00,-5))

