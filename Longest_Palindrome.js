// Longest Palindrome
// Implement a function that finds the longest palindrome in a given string. For example, in the string “My dad is a racecar athlete”, the longest palindrome is “a racecar a”. Count whitespaces as valid characters.

function longestPalindrome (string) {
  var result = '';
  for (var i = 0; i < string.length; i++) {
    var offset = 1;
    var notChecked = true, same = false;
    while(string.charAt(i-offset) && string.charAt(i+offset) 
       && string.charAt(i-offset) === string.charAt(i+offset)){
        getLongest(string.slice(i-offset, i+offset+1));
        offset++;
      }
    while(string.charAt(i-offset) && string.charAt(i+1+offset) 
      && string.charAt(i-offset) === string.charAt(i+1+offset)){
      if(notChecked) {
         if(string[i-offset+1] === string[i+offset]){
          same = true;
         }
         notChecked = false;
      }
      if(!same) {
        break;
      }
      getLongest(string.slice(i-offset, i+offset+2));
      offset++;
    }
  }

  function getLongest(str) {
    if(str.length >= result.length) {
      result = str;
    }
  }
  return result;
}

longestPalindrome('racecar')
// abcba
// zabbaz