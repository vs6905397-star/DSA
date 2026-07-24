// print n to 1

let num = function(n){
    if(n === 0) return 0;
    console.log(n)
    num(n-1);
}


let n = num(10);

// print 1 to n

let numreverse = function(m){
    if(m === 0) return 0;

    num(m-1);
    console.log(m)
}


let m = numreverse(10);