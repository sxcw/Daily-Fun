// Write a program to find the node at which the intersection of two singly linked lists begins.
// Source: https://leetcode.com
const getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) {
        return null;
    }
    let lenA = 0, lenB = 0;
    let tailA = headA, tailB = headB;
    while (tailA.next) {
        tailA = tailA.next;
        lenA++;
    }

    while (tailB.next) {
        tailB = tailB.next;
        lenB++;
    }

    if (tailA !== tailB) {
        return null;
    }

    if (lenA > lenB) {
        for (let i = 0; i < lenA-lenB; i++) {
            headA = headA.next;
        }
    } else {
        for (let i = 0; i < lenB-lenA; i++) {
            headB = headB.next;
        }
    }
    while (headA !== headB) {
        headA = headA.next;
        headB = headB.next;
    }
    return headA;
};
