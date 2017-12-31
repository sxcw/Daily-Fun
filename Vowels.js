// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0
// Source: https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure

// method 1
function vowels(str) {
  const vowels = [ 'a', 'e', 'i', 'o', 'u'];
  return str.toLowerCase().split('').reduce((res, curr) => {
    if (vowels.indexOf(curr) > -1) {
      res++;
    }
    return res;
  }, 0)
}

//method 2
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches? matches.length : 0;
}
