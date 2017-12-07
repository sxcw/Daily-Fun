// Given a singly linked list, determine if it is a palindrome.
// Source: https://leetcode.com
const isPalindrome = function(head) {
    if (head === null) {
        return true;
    }
    let slow = head, fast = head;
    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    let p1 = slow.next, end = null, p2;

    while (p1) {
        p2 = p1.next;
        p1.next = end;
        end = p1;
        p1 = p2;
    }

    while (head && end) {
        if (head.val !== end.val) {
            return false;
        }
        head = head.next;
        end = end.next;
    }
    return true;
}
