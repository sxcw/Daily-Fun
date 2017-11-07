// Given an array and a value, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.
// Source: https://leetcode.com
const removeElement = function(nums, val) {
    let count = 0;
    if (nums === null || nums.length === 0) {
        return 0;
    }

    for (let i = 0; i< nums.length; i++) {
        if (nums[i] !== val) {
            nums[count] = nums[i];
            count++;
        }
    }

    return count;
};
