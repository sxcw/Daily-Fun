// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
// Source: https://leetcode.com

// method 1
const twoSum = (nums, target) => {
    const ans = [];
    nums.forEach((curr, index, array) => {
        let increment = 1;
        while (index + increment < nums.length && ans.length == 0) {
            if (curr + array[index + increment] == target) {
                ans.push(index, index + increment);
                break;
            }
            increment++;
        }
    })
    return ans;
};

// method 2
const twoSum = (nums, target) => {
    const mp = {};
    const ans = [];
    nums.forEach((curr, index, arr) => {
        if (mp[curr] == undefined) {
            mp[target - curr] = index;
        } else {
            ans.push(mp[curr], index);
        }
    })
    return ans;
};
