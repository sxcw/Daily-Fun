// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
// Source: FreeCodeCamp

function mutation(arr) {
  arr =  arr.join(' ').toLowerCase().split(' ');
  var target = arr[1].split('');
  var source = arr[0].split('');
  return target.reduce((result,curr) => {
    if(!source.includes(curr)) {
      result = false;
    }
    return result;
  },true)
}