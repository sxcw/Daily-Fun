// Missing letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
// Source: FreeCodeCamp

function fearNotLetter(str) {
  var index = 0;
  while(index < str.length-1) {
    var cc = str[index+1].charCodeAt(0); 
    var prev = str[index].charCodeAt(0);
    if(prev + 1 !== cc) {
      return String.fromCharCode(prev+1);
    } else {
      index++;
    }
  }
  return undefined;
}

fearNotLetter("abce");