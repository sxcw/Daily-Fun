//Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
//For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
//the contiguous subarray [4,-1,2,1] has the largest sum = 6.
// Source: https://leetcode.com
const maxSubArray = function(A) {
    if (A.length === 1) { return A[0] };

    let ans = A[0], curr = A[0];
    for (let i = 1; i < A.length; i++) {
        curr = curr >= 0 ? curr + A[i] : A[i];
        ans = Math.max(ans, curr)
    }
    return ans;
};
