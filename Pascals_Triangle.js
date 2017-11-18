// Given numRows, generate the first n of Pascal's triangle.
// For example, given n = 5,
// Return
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]
// Source: https://leetcode.com
const generate = function(n) {
    const ans = [[1], [1,1]];
    if (n === 0) {
        return [];
    } else if (n === 1) {
        return [ans[0]];
    } else if (n === 2){
        return ans;
    }
    n -= 3;
    for (let i = 0; i <= n; i++){
        let last = ans[ans.length - 1], next = [], ind = 0;
        while (last.length > ind && last[ind + 1] !== undefined) {
            let sum = last[ind] + last[ind + 1];
            next.push(sum);
            ind++;
        }
        let temp = [1].concat(next,1);
        ans.push(temp);
    }
    return ans;
};
