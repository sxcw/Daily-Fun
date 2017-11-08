// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
// If the last word does not exist, return 0.
// Note: A word is defined as a character sequence consists of non-space characters only.
// Source: https://leetcode.com
const lengthOfLastWord = function(s) {
    const A = s.split(' ');
    let last = A[A.length - 1];
    for (let i = A.length - 1; i >= 0; i--) {
      if (A[i] !== '') {
        last = A[i];
        break;
      }
    }
    const ans = last.length;
    return ans || 0;
};
