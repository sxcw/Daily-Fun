// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
// Source: https://leetcode.com
var isSymmetric = function(root) {
    if (root === null) {return true;}
    return helper(root.left, root.right);
};
var helper = function(left, right) {
    if (left === null && right === null) {
        return true;
    } else if (left === null && right !== null ||
              left !== null && right === null ||
              left.val !== right.val) {
        return false;
    }

    return helper(left.left, right.right) && helper(left.right, right.left);
};
