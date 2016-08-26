// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
// Source: FreeCodeCamp

function palindrome(str) {
  // replace all non-alphanumeric characters with empty strings
  // turn string to lower case
  // check if newStr is equal to str	
  var reg = /[^A-Za-z0-9]/g;
  var newStr = str.replace(reg,'').toLowerCase();
  return newStr === newStr.split('').reverse().join('');
}

