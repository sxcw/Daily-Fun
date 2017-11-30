// Rotate an array of n elements to the right by k steps.
// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
// Source: https://leetcode.com

var rotate = function(nums, k) {
    while (k > 0) {
        let val = nums.pop();
        nums.unshift(val);
        k--;
    }
};
