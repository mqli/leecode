/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let node = head;
    // let count = 0;
    let buffer = [head];
    while (node.next != null) {
        node = node.next;
        buffer.push(node);
        // count++ ;
    }
    if (buffer.length == 1){
        return null
    } else if(n == buffer.length){
        return head.next
    } else if (n == buffer.length){
        buffer[buffer.length - n - 1].next = null;
    } else{
        buffer[buffer.length - n - 1].next = buffer[buffer.length - n + 1];
    }
    return head
};