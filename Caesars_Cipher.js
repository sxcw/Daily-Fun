// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
// Source: FreeCodeCamp

function rot13(str) { 
  if(str.length === 0) { return ''};
  var pattern  = /[^a-zA-Z]/g; 
  return str.split(' ').map(word => {
    return word.split('').map(letter => {
      if(letter.match(pattern)) return letter; 
      var charcode = letter.charCodeAt(0);
      if(charcode >=78 && charcode < 97 || charcode >= 110 && charcode < 122) {
        return String.fromCharCode(charcode-13);
      } else {
        return String.fromCharCode(charcode+13);
      }      
    }).join('');
  }).join(' ');
  return str;
}