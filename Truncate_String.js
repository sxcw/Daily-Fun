// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
// Note that inserting the three dots to the end will add to the string length.
// However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.
// truncateString("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket...".
// Source: FreeCodeCamp

function truncateString(str, num) {
  if(str.length === 0 || num <= 0) return '';
  if(num <= 3) return str.substring(0, num) + '...';
  if(str.length <= num) return str;
  return str.substring(0, num-3) + '...';
}
