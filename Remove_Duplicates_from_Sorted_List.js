// Given a sorted linked list, delete all duplicates such that each element appear only once.
// Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3.
// Source: https://leetcode.com
const deleteDuplicates = function(head) {
    if (head === null || head.next === null) {
        return head;
    }

    let curr = head;
    while (curr.next !== null) {
        if (curr.val == curr.next.val) {
            const redundant = curr.next;
            curr.next = curr.next.next;
            redundant.next = null;
        } else {
            curr = curr.next;
        }
    }
    return head;
};
