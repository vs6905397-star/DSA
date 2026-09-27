//question: https://leetcode.com/problems/k-closest-points-to-origin/

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let maxHeap = new Maxheap(); 

    for(let point of points){
        let distance = (point[0]**2) + (point[1]**2);

        maxHeap.insert([point, distance]);

        if(maxHeap.size() > k){
            maxHeap.extractMax();
        }
    }

    return maxHeap.heap.map(([point, distance]) => point);
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

            if(this.heap[index][1] <= this.heap[parent][1]){
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

            if(left < this.heap.length && this.heap[left][1] > this.heap[largest][1]){
                largest = left;
            }

            if(right < this.heap.length && this.heap[right][1] > this.heap[largest][1]){
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