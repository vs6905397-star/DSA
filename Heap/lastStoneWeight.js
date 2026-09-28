//question: https://leetcode.com/problems/last-stone-weight/submissions/2155487927/

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let maxHeap = new Maxheap();

    for(let stone of stones){
        maxHeap.insert(stone);
    }

    while(maxHeap.size()>1){
        let stone1 = maxHeap.extractMax();
        let stone2 = maxHeap.extractMax();

        if(stone1 !== stone2){
            let difference = stone1 - stone2;

            maxHeap.insert(difference);
        }

        if(maxHeap.size() === 0){
            return 0;
        }
    }
 return maxHeap.peek();
};



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