// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
// Source: https://leetcode.com
const sortedArrayToBST = function(nums) {
    return buildTree(nums, 0, nums.length-1)
};

const buildTree = function (nums, start, end) {
    if (start > end) { return null; }
    let mid = Math.ceil((start + end)/2);
    let node = new TreeNode(nums[mid]);
    node.left = buildTree(nums, start, mid - 1);
    node.right = buildTree(nums, mid + 1, end);
    return node;
}
