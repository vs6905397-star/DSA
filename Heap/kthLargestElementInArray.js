//question: https://leetcode.com/problems/kth-largest-element-in-an-array/submissions/2153588698/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
let minHeap = new Minheap();

    for(let num of nums){
        minHeap.insert(num);

        if(minHeap.size() > k){
            minHeap.extractMin();
        }
    }

    return minHeap.peek();
}
    
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

            if(this.heap[index] >= this.heap[parent]){
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

            if(left < this.heap.length && this.heap[left] < this.heap[smallest]){
                smallest = left;
            }

            if(right < this.heap.length && this.heap[right] < this.heap[smallest]){
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