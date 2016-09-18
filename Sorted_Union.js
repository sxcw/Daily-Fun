// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// Source: FreeCodeCamp

function uniteUnique(arr) {
  var arrs = Array.prototype.slice.call(arguments,0);
  return arrs.reduce((result,curr) => {
    var temp = curr.filter(num => {
      return result.indexOf(num) === -1;
    });
    return result.concat(temp);
  },[]);
}