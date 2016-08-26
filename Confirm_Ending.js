// Check if a string (first argument, str) ends with the given target string (second argument, target).
// confirmEnding("Bastian", "n") should return true. 
// confirmEnding("He has to give me a new name", "name") should return true.
// confirmEnding("Open sesame", "same") should return true.
// confirmEnding("Open sesame", "pen") should return false.
// Source: FreeCodeCamp

function confirmEnding(str, target) {
 var arr = str.split(' ');
 var last = arr[arr.length-1];
 for(var i = target.length-1; i >= 0; i--) {
  if(target[i] !== last[last.length-1]) {
    return false;
  }
  last = last.substring(0,last.length-1);
 }
 return true;
}