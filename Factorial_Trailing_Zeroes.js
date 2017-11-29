// Given an integer n, return the number of trailing zeroes in n!.
// Note: Your solution should be in logarithmic time complexity.
// Source: https://leetcode.com
const trailingZeroes = function(n) {
    let exp = 1, base = 5, res = 0;
    while(Math.pow(base,exp) <= n) {
        res += Math.floor(n/(Math.pow(base,exp)));
        exp++;
    }
    return res;
};
