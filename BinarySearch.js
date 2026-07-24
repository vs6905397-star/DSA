
let binarySearch = function(n,target){
    let last = n.length - 1;
    let first = 0;

    while(first <= last){

        let mid = Math.floor( (first + last )/ 2);

        if(n[mid] == target) {
            return mid;
        } else if(n[mid] > target){
            last = mid - 1;
        } else {
            first = mid + 1;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,5,8,9], 6));