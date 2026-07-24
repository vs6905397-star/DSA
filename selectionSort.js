let selectionSort = function(n){

    for (let i=0; i<n.length; i++){
        let minIdx = i;
        for(let j=i+1; j<n.length; j++){
            if(n[j] < n[minIdx]){
                minIdx = j;
            }
        }
        let temp = n[i];
            n[i] = n[minIdx];
            n[minIdx] = temp;
    }
     return n;
}

console.log(selectionSort([6,4,6,2,1,3]))