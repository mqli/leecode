/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    if (head === null){
        return head;
    }
    let index = head;
    while (index.next !== null) {
        let innerIndex = head
        while (index !== innerIndex) {
            innerIndex = innerIndex.next;
            if (index.val > innerIndex.val) {
                let buf = index.val;
                index.val = innerIndex.val;
                innerIndex.val = buf;
            }
        }
        index = index.next;
    }
    return head;
};