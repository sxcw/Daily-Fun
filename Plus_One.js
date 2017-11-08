// Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
// You may assume the integer do not contain any leading zero, except the number 0 itself.
// The digits are stored such that the most significant digit is at the head of the list.
// Source: https://leetcode.com
const plusOne = function(A) {
    let plus = 0;
    for (let i = A.length - 1; i >= 0; i--) {
        A[i] += plus;

        if (i === A.length - 1) {
            A[i]++;
        }

        if (A[i] === 10) {
            A[i] = 0;
            plus = 1;
        } else {
            plus = 0;
        }
    }

    if (plus === 1) {
        A.unshift(1);
    }

    return A;
}
