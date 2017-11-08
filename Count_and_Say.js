// The count-and-say sequence is the sequence of integers with the first five terms as following:
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.
// Source: https://leetcode.com
const countAndSay = function(n) {
    if (n <= 1) {
        return '1';
    }
    let ans = '1';

    for (let i = 2; i <= n; i++) {
        let num = ans[0];
        let tmp = ans;
        let count = 1;
        ans = '';
        for (let j = 1; j <= tmp.length; j++) {
            if (tmp[j] == num) {
                count++;
            } else {
                ans += `${count}${num}`;
                num = tmp[j];
                count = 1;
            }
        }
    }
    return ans;
};
