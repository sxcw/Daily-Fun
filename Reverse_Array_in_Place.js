// reverse and return an array in place (space complexity of O(1))

const reverseArrayInPlace = array => {
  var mid = Math.floor(array.length / 2);
  for (var i = 0; i < mid; i++ ) {
    var last = array.length-1-i;
    var temp = array[last]; 
    array[last] = array[i];
    array[i] = temp;
  }
  return array;
};

// reverseArrayInPlace([1,2,3]) ==> [3,2,1]