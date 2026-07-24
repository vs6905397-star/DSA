//sum of digits

let count = function(n) {
    if(n < 10) return 1;

    return 1 + count(Math.floor(n/10));

}

console.log(count(1241542));

