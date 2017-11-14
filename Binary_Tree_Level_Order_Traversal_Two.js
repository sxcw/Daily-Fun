// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).
// Source: https://leetcode.com
const levelOrderBottom = function(root) {
    const mp = {};
    const ans = [];
    helper(root, 0, mp);
    for (let key in mp) {
        ans.push(mp[key]);
    }
    return ans.reverse();
};

const helper = function(root, level, mp) {
    if (!root) { return; }
    if (!mp[level]) {
        mp[level] = [root.val];
    } else {
        mp[level].push(root.val);
    }
    level++;
    helper(root.left, level, mp);
    helper(root.right, level, mp);
};
