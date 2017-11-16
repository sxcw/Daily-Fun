// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
// Source: https://leetcode.com
const minDepth = function(root) {
    if (!root) {return 0;}
    let minL = minDepth(root.left);
    let minR = minDepth(root.right);

    if (minL === 0 && minR === 0) {
        return 1;
    }

    if (minL === 0) {
        minL = Number.MAX_SAFE_INTEGER;
    } else if (minR === 0) {
        minR = Number.MAX_SAFE_INTEGER;
    }

    return Math.min(minL, minR) + 1;
};
