// You are climbing a stair case. It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Note: Given n will be a positive integer.
// Source: https://leetcode.com
const climbStairs = function(n) {
    if (n === 1) return 1;
    let p1 = 1, p2 = 0, sum = 1;
    for (let i = 2; i <= n; i++) {
        p2 = p1;
        p1 = sum;
        sum = p1 + p2;
    }
    return sum;
};
