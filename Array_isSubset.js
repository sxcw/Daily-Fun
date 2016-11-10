// Array isSubset
// Create a function that takes two arrays and determine whether the second array is a subset of the first array. Arrays will only contain primitive values.
// input: array: [ 2, 2, 2, 3, 4 ], sub: [ 2, 4, 3 ], output: true
// input: array: [ 2, 3, 3, "a" ], sub: [ 3, 3, 3, "a" ], output: false

function isSubset (array, sub) {
  while(sub.length) {
    let ind = array.indexOf(sub[0]);
    if(ind === -1) {
      return false
    } else{
      sub.shift();
      array.splice(ind,1);
    }
  }
  return true;
}