// sum of n numbers

let sum = function(n){
    let ans = 0;
    if(n === 1) return 1;

    ans = n + sum(n-1);
    return ans;

}

console.log(sum(10))

