//question: https://leetcode.com/problems/find-median-from-data-stream/


var MedianFinder = function() {
    this.left = new Maxheap();
    this.right = new Minheap();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.left.size() === 0 || num <= this.left.peek()){
        this.left.insert(num);
    }else{
        this.right.insert(num);
    }

    if(this.left.size() > this.right.size()+1){
        this.right.insert(this.left.extractMax());
    }

    if(this.right.size() > this.left.size()){
        this.left.insert(this.right.extractMin());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.left.size() > this.right.size()){
        return this.left.peek();
    }

    return (this.left.peek()+this.right.peek())/2;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

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


class Maxheap{
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

            if(this.heap[index] <= this.heap[parent]){
                break;
            }

            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];

            index = parent;
        }
    }

    extractMax(){

        if(this.heap.length === 0){
            return null;
        }

        if(this.heap.length === 1){
            return this.heap.pop();
        }

        let max = this.heap[0];

        let last = this.heap.pop();

        this.heap[0] = last;

        this.heapifyDown();

        return max;
    }

    heapifyDown(){
        let index = 0;

        while(true){
            let left = 2*index+1;
            let right = 2*index+2;

            let largest = index;

            if(left < this.heap.length && this.heap[left] > this.heap[largest]){
                largest = left;
            }

            if(right < this.heap.length && this.heap[right] > this.heap[largest]){
                largest = right;
            }

            if(largest === index){
                break;
            }

            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];

            index = largest;
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