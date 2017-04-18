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
var insertionSortList = function (head) {
    if (head === null || head.next === null) {
        return head;
    }
    let sorted = head;
    let unsorted = head.next;
    sorted.next = null;

    while (unsorted) {
        let tosort = unsorted;
        unsorted = unsorted.next;
        tosort.next = null;
        let index = sorted;
        let prev = null;


        while (index && index.val < tosort.val) {
            prev = index;
            index = index.next;
        }
        if (index === sorted) {
            tosort.next = sorted;
            sorted = tosort;
        } else if (index === null) {
            prev.next = tosort;
        } else {
            tosort.next = index;
            prev.next = tosort;
        }

    }

    return sorted;
};

let head = {
    val: 4
};
head.next = {
    val: 2
};
head.next.next = {
    val: 1
};
head.next.next.next = {
    val: 3
};
console.dir(insertionSortList(head), {
    depth: null
})