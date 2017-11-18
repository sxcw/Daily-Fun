// Determine whether an integer is a palindrome. Do this without extra space.
// Source: https://leetcode.com
const isPalindrome = function(x) {
    if (x < 0){
        return false;
    } else if (x < 10) {
        return true;
    }
    let y = 0, num = x, target= '';
    while (x > 0){
        y = Math.floor(x % 10);
        x = Math.floor(x / 10);
        if (target === '') {
            target = y;
        } else {
            target = target * 10 + y;
        }
    }
    return target === num;
};
