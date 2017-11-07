// Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// Source: https://leetcode.com
const removeDuplicates = function(nums) {
    if (nums === null || nums.length === 0) {
        return 0;
    }

    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[count] !== nums[i]) {
            count++;
            nums[count] = nums[i];
        }
    }
    return count + 1;
};
