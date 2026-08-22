class Stack{
    item = [];
    currentSize;
    maxSize;

    constructor(){
        this.currentSize = this.item.length;
        this.maxSize = 5;       
    }

    push(newVal){
        if(this.currentSize > this.maxSize){
            console.log("stack is full");
        } else {
        this.item[this.currentSize] = newVal;
        this.currentSize+=1;
        }
    }

    pop(){
        if(this.item.length <= 0){
            console.log("stack is empty");
        } else {
            
            this.currentSize = this.currentSize-1;
            this.item.length = this.currentSize;
        }
    }

    peak(){
        if(this.item.length <= 0){
            console.log("stack is empty");
        } else {
            console.log("peak/top element of this stack is",this.item[this.currentSize-1])
        }
    }

    isempty(){
        return this.item.length === 0;
    }

    display(){
        console.warn(this.item);
    }
}

function reverseString(string) {

   let stack = new Stack;
   let result = "";

   for(let char of string){
    stack.push(char);
   }

   while(!stack.isempty()){
    result += stack.pop();
   }

   return result;
}

console.log(reverseString("ashu"))




// stack with help of function


function reverseString(string) {

   let stack = [];
   let result = "";

   for(let char of string){
    stack.push(char);
   }

   while(stack.length > 0){
    result += stack.pop();
   }

   return result;
}

let string = "hello";

console.log(reverseString(string));