// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.
// Source: https://leetcode.com
const majorityElement = function(nums) {
    const count = nums.length / 2;
    const mp = {};
    let ans = '';
    nums.forEach(num => {
        if (mp[num] === undefined){
            mp[num] = 1;
        } else {
            mp[num]++;
        }
        if(mp[num] > count){
            ans = num;
        }
    })
    return ans;
};
