//factorial of n

let fact = function(n) {
    if(n === 1) return 1;

    let ans = n * fact(n-1);
    return ans;
}

console.log(fact(5));