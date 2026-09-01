//question: https://leetcode.com/problems/middle-of-the-linked-list/


// solution by me without any help

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let current = head;
    let result = head;
    let count = 1;
    let idx = 1; 

    while(current.next !== null){
        current = current.next;
        count++;
    }

    let middle = Math.floor(count/2) + 1;

    while(idx < middle){
        result = result.next;
        idx++;
    }
    return result;
};


// best approch 


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let fast = head;
    let slow = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};