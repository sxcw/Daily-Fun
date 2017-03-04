// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns N.
// [2, 4, 0, 100, 4, 11, 2602, 36], Should return: 11
// [160, 3, 1719, 19, 11, 13, -21], Should return: 160
// Source: Codewar

function findOutlier(integers){
  const even = [];
  const odd = []; 
  for(var i = 0; i < integers.length; i++) {
    if(integers[i] % 2 === 0) {
      even.push(integers[i]);
    } else {
      odd.push(integers[i]);
    }
    if(even.length > 1 && odd.length === 1) {
      return odd[0];
    } else if (odd.length > 1 && even.length === 1) {
      return even[0];
    }
  }
  return even.length === 1 ? even[0] : odd[0];
}