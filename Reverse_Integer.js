// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output:  321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
// Source: https://leetcode.com

const reverse = x => {
    let str = '', neg = false;

    if (x == 0) {
        return 0;
    } else if (x > 0) {
        str = `${x}`;
    } else {
        str = `${x}`;
        neg = true;
    }

    const arr = str.split('').reverse();

    if (neg) {
        arr.unshift('-');
    }

    const ans = parseFloat(arr.join(''));
    return  ans > 2147483647 || ans < -2147483648 ? 0 : ans;
};
