// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// Source: https://leetcode.com
// method 1
const strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};

// method 2
const strStr = function(haystack, needle) {
    if (!needle) { return 0; }
    if (!haystack) { return -1; }
    if (needle.length > haystack.length) { return -1; }

    for (let i = 0; i < haystack.length; i++) {
        let substr = haystack.substring(i, i+needle.length);
        if (substr === needle) {
            return i;
        }
    }

    return -1;
};
