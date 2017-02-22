// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters. getMiddle("test") should return "es". getMiddle("testing") should return "t". getMiddle("A") should return "A"
// Source: Codewar

function getMiddle(s) {
  if(s.length < 3 && s.length > 0){
    return s;
  }
  const len = s.length;
  if(len % 2) {
    return s[Math.floor(len/2)];
  } else {
    const ind = len / 2;
    return s[ind - 1] + s[ind];
  }
}