// Write an algorithm to determine if a number is "happy".
// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
// Example: 19 is a happy number
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Source: https://leetcode.com

const isHappy = function(n) {
    const mp = {};
    while (n !== 1) {
        let total = 0;
        while (n) {
            total += (n % 10) * (n % 10);
            n = Math.floor(n/10);
        }
        n = total;
        if (total in mp) {
            break;
        } else {
            mp[total] = true;
        }
    }
    return n === 1;
};
