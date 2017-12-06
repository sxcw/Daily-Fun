// Reverse a singly linked list.
// Source: https://leetcode.com
// method 1
const reverseList = function(head) {
    if (head && !head.next) {
        return head;
    }

    let curr = head;
    let prev = null;
    while (curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    return prev;
};

// method 2
const reverseList = function(head) {
    if (head === null) {
        return head;
    } else if (head.next === null) {
        return head;
    }
    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return newHead;
};
