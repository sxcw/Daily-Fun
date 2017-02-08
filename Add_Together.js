// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2); sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.
// Source: FreeCodeCamp

function addTogether() {
  var args = [].slice.call(arguments);
  if(args[0] && typeof args[0] !== 'number' || args[1] && typeof args[1] !== 'number') {
    return undefined;
  } else if (args[0] && args[1] ) {
    return args[0] + args[1];
  } else {
    return function(val) {
      return addTogether(args[0],val)
    }
  }
}
