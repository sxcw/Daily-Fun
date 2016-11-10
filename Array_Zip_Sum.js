// Array Zip Sum
// Given two arrays of negative/positive integers, return a new array such that each element at index n is the sum of the two elements from the other arrays at their index n’s.
// input: xs:[ 10, 20, 30 ], ys: [ 1, 2, 3 ], output: [11,22,33]
// input: xs:[ 10, 20 ], ys: [ 1, 2, 3 ], output: [11,22]

function zipSum (xs, ys) {
  const res = [];
  while(xs.length && ys.length) {
    res.push(xs[0]+ys[0]);
    xs.splice(0,1);
    ys.splice(0,1);
  }
  return res;
}

