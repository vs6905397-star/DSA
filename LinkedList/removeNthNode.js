//question: https://leetcode.com/problems/remove-nth-node-from-end-of-list/


//solution by me

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let total = 0;
    let current = head;

    while(current !== null){
        total++;
        current = current.next;
    }

    let position = total-n;

    if(position === 0){
        head = head.next;
    } else {
        current = head;
        let idx = 1;

        while(idx < position ){
            current = current.next;
            idx++;
        }

        current.next = current.next.next;
    }
    return head;
};



// optimize solution

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
   let slow = head;
   let fast = head;

   while(fast !== null && fast.next !==  null){
    slow = slow.next;
    fast = fast.next.next;

    if(slow === fast){
        return true;
    }
   }
   return false;
};