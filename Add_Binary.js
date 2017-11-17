// Given two binary strings, return their sum (also a binary string).

// For example,
// a = "11"
// b = "1"
// Return "100".
// Source: https://leetcode.com
const addBinary = function(a, b) {
    if (a === '0' && b === '0') { return '0';}
    let short = a, long = b;
    if (a.length > b.length) {
        short = b;
        long = a;
    }

    let carry = 0; let result = '', j =short.length - 1;
    for (let i = long.length -1; i >= 0; i--) {
        let sum = carry + Number(long[i]) + (Number(short[j]) || 0);
        carry = 0;

        if (sum >= 2) {
            sum = sum % 2;
            carry = 1;
        }
        console.log('sum:', sum, ' result:',result)
        result = sum + result;
        j--;
    }
    if (carry) {
        return '1' + result;
    }
    return result;
};
