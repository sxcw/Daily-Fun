// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
// Source: https://leetcode.com
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const mergeTwoLists = function(l1, l2) {
    let nodes = new ListNode(-1);
    let curr = nodes;

    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    if (l1 !== null) {
        curr.next = l1;
    } else if (l2 !== null) {
        curr.next= l2;
    }

    return nodes.next;
};
