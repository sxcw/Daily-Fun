// Given a roman numeral, convert it to an integer.
// Input is guaranteed to be within the range from 1 to 3999.
// Source: https://leetcode.com

// method 1
const romanToInt = function(num) {
    let ans = 0;
    let skip = false;
    num.split('').forEach((curr, index, arr) => {
        if (skip) {
          skip = false;
          return;
        }
        const combo = arr[index + 1] ? curr + arr[index + 1] : null;
        if (combo && mp[combo]) {
            ans += mp[combo];
            skip = true;
        } else if (mp[curr]) {
            ans += mp[curr];
        }
    })
    return ans;
};

const mp = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
}

//method 2
const romanToInt = function(num) {
    let ans = 0;
    let skip = false;
    num.split('').forEach((curr, index, arr) => {
        if (skip) {
            skip = false;
            return;
        }
        if (mp[curr] < mp[arr[index + 1]]) {
            ans = ans + mp[arr[index + 1]] - mp[curr];
            skip = true;
        } else {
            ans += mp[curr];
        }
    })

    return ans;
}

const mp = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}
