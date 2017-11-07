// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You may assume no duplicates in the array.
// Source: https://leetcode.com
// method 1
const searchInsert = function(nums, target) {
    if (nums[nums.length - 1] == target) {
        return nums.length - 1;
    } else if (nums[nums.length - 1] < target) {
        return nums.length;
    } else if (nums[0] >= target) {
        return 0;
    }

    let pos1 = 0, pos2 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) return i;
        if (nums[i] < target) {
            pos1 = i+1;
        }
        if (nums[i] > target) {
            pos2 = i;
        }
        if (pos1 === pos2 && pos1 && pos2) {
            return pos1;
        }
    }
};
// method 2
const searchInsert = function(nums, target) {
    let start = 0, end = nums.length;
    if (nums[end-1] < target) return end;
    if (nums[0] > target) return 0;
    while (start <= end) {
        let mid = Math.floor((start + end)/2);
        if (nums[mid] === target) return mid;
        if (nums[mid] > target){
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return start;
}
