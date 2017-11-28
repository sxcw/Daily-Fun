// Given a column title as appear in an Excel sheet, return its corresponding column number.
// Source: https://leetcode.com
const titleToNumber = function(s) {
    const offset = 64;
    let digit = 0;
    let res = 0;
    for (i = s.length -1; i >= 0; i--) {
        res += ((s[i].charCodeAt(0)) - offset) * Math.pow(26, digit);
        digit++;
    }
    return res;
};
