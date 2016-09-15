// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.
// sumAll([5, 10]) should return 45.  sumAll([10, 5]) should return 45.
// Source: FreeCodeCamp

function sumAll(arr) {
  var start = arr[0]|| null, end = arr[1] || null;
  if (!start && !end) { return 0; }
  if (start&& !end) { return start; }
  var result = 0;
  if (start < end) {
    for(var i = start; i <= end; i++) {
      result += i;
    }
  } else {
    for(var i = end; i <= start; i++) {
      result += i;
    }
  }
  return result;
}
