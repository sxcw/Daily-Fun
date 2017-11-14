// Given a binary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// Source: https://leetcode.com
// method 1
const maxDepth = function(root) {
    return helper(root);
};

const helper = function(root) {
    let countL = 1, countR = 1;
    if (!root) {
        return 0;
    };

    if (root.left) {
        countL += helper(root.left);
    }

    if (root.right) {
        countR += helper(root.right);
    }

    if (countR > countL) {
        return countR;
    } else {
        return countL;
    }
}

// method 2
const maxDepth = function(root) {
    if (!root) {
        return 0;
    }

    const countL = maxDepth(root.left);
    const countR = maxDepth(root.right);
    return Math.max(countL, countR) + 1;
};
