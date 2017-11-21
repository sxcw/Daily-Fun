// Linked List Cycle
// Source: https://leetcode.com
var hasCycle = function(head) {
    if (head === null || head.next === null) {
        return false;
    }
    var slow = head;
    var fast = head.next;
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
};
