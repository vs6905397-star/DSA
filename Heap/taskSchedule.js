//question:https://leetcode.com/problems/task-scheduler/


/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let freq = new Map();

    for(let task of tasks){
        freq.set(task, (freq.get(task)|| 0) + 1);
    }

    let maxHeap = new Maxheap();

    for(let [task, count] of freq){
        maxHeap.insert([count, task]);
    }

    let time = 0;

    while(maxHeap.size() > 0){
        let temp = [];

        for(let i =0; i<=n; i++){
            if(maxHeap.size() > 0){
                let [count, task] = maxHeap.extractMax();

                count--;
                time++;

                if(count>0){
                    temp.push([count, task]);
                }
            }else if(temp.length >0){
                time++;
            }else{
                break;
            }
        }

        for(let item of temp){
            maxHeap.insert(item);
        }
    }

    return time;
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

            if(this.heap[index][0] <= this.heap[parent][0]){
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

            if(left < this.heap.length && this.heap[left][0] > this.heap[largest][0]){
                largest = left;
            }

            if(right < this.heap.length && this.heap[right][0] > this.heap[largest][0]){
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