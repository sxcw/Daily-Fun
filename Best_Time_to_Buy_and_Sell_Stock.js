// Source: https://leetcode.com
// This method exceeds time limit
var maxProfit = function(prices) {
    let min = prices[0], max = 0, diff = 0;
    for (let i = ; i < prices.length; i++) {
    min = Math.min.apply(null, prices.slice(0,i).length > 0 ? prices.slice(0,i) : [prices[i], Number.MAX_SAFE_INTEGER]);
    max = Math.max.apply(null, prices.slice(i + 1).length > 0 ? prices.slice(i) : [prices[i], Number.MIN_SAFE_INTEGER]);
        diff = Math.max(diff, max-min);
    }
    return diff;
};
// This works
var maxProfit = function(prices) {
    if (prices.length === 0) {
     return 0;
    }
    let minLeft = [], maxRight = [], n = prices.length, maxPro = 0;
    minLeft[0] = prices[0];

    for (let i = 1; i < n; i++) {
        let curr = prices[i];
        if (minLeft[i-1] > curr) {
            minLeft[i] = curr;
        } else {
            minLeft[i] = minLeft[i-1];
        }
    }

    maxRight[n-1] = prices[n-1];
    for (let i = n-2; i >=0 ; i--) {
        let curr = prices[i];
        if (maxRight[i+1] < curr) {
            maxRight[i] = curr;
        } else {
            maxRight[i] = maxRight[i+1];
        }
    }

    for (let i = 0; i < n; i++){
        let diff = maxRight[i] - minLeft[i];
        if (maxPro < diff) {
            maxPro = diff;
        }
    }
    return maxPro;
}
