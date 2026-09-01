//question: https://leetcode.com/problems/design-circular-queue/

/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.queue = new Array(k);
    this.k = k;
    this.rear = -1;
    this.front = -1;
    this.size = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()) return false;
    if(this.isEmpty()){
        this.front++;
        this.rear++;
    } else{
        this.rear = (this.rear + 1) % this.k;

    }
    this.queue[this.rear] = value;
    this.size++;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()) return false;
    if(this.size === 1){
        this.front = -1;
        this.rear = -1;
    } else{
        this.front = (this.front + 1) % this.k;
    }
    
    this.size--;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty()){
        return -1
    }else{
    return this.queue[this.front];
    }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()){
        return -1
    }else{
    return this.queue[this.rear];
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.size === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.size === this.k;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */