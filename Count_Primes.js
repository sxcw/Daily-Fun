// Count the number of prime numbers less than a non-negative number, n.
// Source: https://leetcode.com
const countPrimes = function(n) {
    if (n < 3) {
        return 0;
    }
    let count = 1;
    for (let i = 3; i < n; i+=2) {
        let isPrime = true;
        for (let j = 3; j * j <= i; j +=2) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) count++;
    }
    return count;
};
