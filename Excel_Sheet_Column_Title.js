// Given a positive integer, return its corresponding column title as appear in an Excel sheet.
// Source: https://leetcode.com
const convertToTitle = function(n) {
    if (n <= 0) { return null; }
    const offset = 65;
    const base = 26;
    let res = '';
    let current = n;
    while (current > 0) {
        let digit = (current - 1) % base;
        res = String.fromCharCode(digit + offset) + res;
        current = Math.floor((current - 1) / base);
    }
    return res;
};
