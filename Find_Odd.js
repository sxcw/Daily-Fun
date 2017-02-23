// Given an array, find the int that appears an odd number of times. There will always be only one integer that appears an odd number of times.
// findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) ==> 5;
// Source: Codewar

function findOdd(A) {
  const mp = A.reduce((obj,curr) => {
    if(obj[curr] !== undefined) {
      obj[curr]++;
    } else {
      obj[curr] = 1;
    }
    return obj;
  },{});
  
  for (let key in mp) {
    if(mp[key] % 2 !== 0) {
      return parseInt(key);
    }
  }
}