// Given a binary tree, determine if it is height-balanced.
// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
// Source: https://leetcode.com
const isBalanced = function(root) {
    return findDepth(root) !== -1;
}

const findDepth = function(root) {
    if (root === null) {return 0;}
    let depthL = findDepth(root.left);
    let depthR = findDepth(root.right);
    if (depthL == -1 || depthR == -1) return -1;
    if (Math.abs(depthL - depthR) > 1) {
        return -1;
    }
    return Math.max(depthL, depthR) + 1;
}
