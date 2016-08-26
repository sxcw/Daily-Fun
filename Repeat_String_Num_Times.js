// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
// repeatStringNumTimes("*", 3) should return "***".
// repeatStringNumTimes("abc", 3) should return "abcabcabc".
// Source: FreeCodeCamp

function repeatStringNumTimes(str, num) {
  if(!str.length) return '';
  if(num < 0) return '';
  function recurse(result,num){
    if(num <= 1) {
      return result;
    } else {
      result += str;
      return recurse(result, num-1);
    }
  }
  return recurse(str, num)
}

