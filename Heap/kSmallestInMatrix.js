//question: https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let minHeap = new Minheap();

    for(let row=0; row < matrix.length; row++){
        minHeap.insert([matrix[row][0], row, 0]);
    }

    for(let i=0; i<k-1; i++){
        let [value, row, column] = minHeap.extractMin();

        if(column +1 < matrix[row].length){
            minHeap.insert([matrix[row][column+1], row, column+1]);
        }
    }
    return minHeap.peek()[0];
};



 class Minheap{
    constructor(){
        this.heap = [];
    }

    insert(value){
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp(){
        let index = this.heap.length - 1;

        while(index > 0){
            let parent = Math.floor((index-1)/2);

            if(this.heap[index][0] >= this.heap[parent][0]){
                break;
            }

            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];

            index = parent;
        }
    }

    extractMin(){

        if(this.heap.length === 0){
            return null;
        }

        if(this.heap.length === 1){
            return this.heap.pop();
        }

        let min = this.heap[0];

        let last = this.heap.pop();

        this.heap[0] = last;

        this.heapifyDown();

        return min;
    }

    heapifyDown(){
        let index = 0;

        while(true){
            let left = 2*index+1;
            let right = 2*index+2;

            let smallest = index;

            if(left < this.heap.length && this.heap[left][0] < this.heap[smallest][0]){
                smallest = left;
            }

            if(right < this.heap.length && this.heap[right][0] < this.heap[smallest][0]){
                smallest = right;
            }

            if(smallest === index){
                break;
            }

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];

            index = smallest;
        }
    }

    peek(){
        return this.heap[0];
    }

    size(){
        return this.heap.length;
    }

    isEmpty(){
        return this.heap.length === 0;
    }
}