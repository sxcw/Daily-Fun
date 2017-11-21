// Given an array of integers, every element appears twice except for one. Find that single one.
// Source: https://leetcode.com
const singleNumber = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i-1] && nums[i] !== nums[i+1]) {
            return nums[i];
        }
    }
};
