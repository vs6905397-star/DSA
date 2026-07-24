// sum of digits 

let sum = function(n) {
    if(n < 1) return 0;
     
    let x = Math.floor(n % 10);
    let y = n / 10;
    let ans = x + sum(y);
    return ans;
}

console.log(sum(12456));