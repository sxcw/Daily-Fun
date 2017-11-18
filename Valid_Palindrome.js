// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// For example,
// "A man, a plan, a canal: Panama" is a palindrome.
// "race a car" is not a palindrome.
const isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi,'').toLowerCase();
    if (s.length === 0 || s.length === 1) {
        return true;
    }
    let left = 0, right = s.length -1;
    while (left <= right){
        if (s.substr(left,1) !== s.substr(right,1)) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};
