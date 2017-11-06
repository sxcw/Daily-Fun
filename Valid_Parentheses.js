// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
// Source: https://leetcode.com

// method 1
var isValid = function(s) {
    const arr = [];
    for (let i = 0; i < s.length; i++) {
        if (mp[s[i]]) {
            arr.push(s[i]);
        } else {
            const opening = arr.pop();
            if (s[i] !== mp[opening]) {
                return false;
            }
        }
    }
    return arr.length === 0;
};

const mp = {
    '{' : '}',
    '(' : ')',
    '[' : ']'
}