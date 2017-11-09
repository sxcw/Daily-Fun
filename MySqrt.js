// Implement int sqrt(int x).
// Compute and return the square root of x.
// x is guaranteed to be a non-negative integer.
// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we want to return an integer, the decimal part will be truncated.
// Source: https://leetcode.com
const mySqrt = function(x) {
    if (x === 0) return 0;
    if (x === 1) return 1;
    for (let i = 0; i <= x; i++) {
        if (i * i > x) {
            return i - 1;
        }
    }
};
