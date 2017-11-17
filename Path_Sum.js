// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum
// Source: https://leetcode.com
const hasPathSum = function(root, sum) {
    if (root === null){
        return false;
    }

    sum -= root.val;
    if (!root.left && !root.right) {
        return sum === 0 ? true: false;
    }
    if (root.left && hasPathSum(root.left, sum)) {
        return true;
    }
    if (root.right && hasPathSum(root.right, sum)) {
         return true;
    }
    return false;
};
