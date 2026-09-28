//question: https://leetcode.com/problems/find-k-pairs-with-smallest-sums/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    let minHeap = new Minheap();
    let result = []

    for(let i=0; i<nums1.length && i<k; i++){

            minHeap.insert([
                nums1[i] + nums2[0],
                 i, 0
                 ]);
    }

    while(result.length < k && minHeap.size() > 0){
        let [sum, i, j] = minHeap.extractMin();

        result.push([nums1[i], nums2[j]]);

        if(j+1 < nums2.length){
            minHeap.insert([
                nums1[i] + nums2[j+1],
                 i, j+1
                 ]);
        }
    }

    return result;
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