// Remove all elements from a linked list of integers that have value val.

// Example
// Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
// Return: 1 --> 2 --> 3 --> 4 --> 5
// Source: https://leetcode.com

const removeElements = function(head, val) {
    if (!head) {
        return [];
    }
    let node = new ListNode(0);
    let prev = node;
    node.next = head;

    while (head) {
        if (head.val == val) {
            prev.next = head.next;
        } else {
            prev = head;
        }
        head = head.next;
    }
    return node.next;
};
