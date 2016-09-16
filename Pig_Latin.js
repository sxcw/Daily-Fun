// Pig Latin
// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// translatePigLatin("glove") should return "oveglay".
// translatePigLatin("algorithm") should return "algorithmway".
// Source: FreeCodeCamp

function translatePigLatin(str) {
  var vowels = ['a','e','i','o','u'];
  if(vowels.indexOf(str[0]) > -1) {
    return str += 'way';
  } else {
    var arr = str.split('');
    var temp= [];
    for(var i = 0; i < arr.length; i++) {
      if(vowels.indexOf(arr[i]) > -1){
        break;
      }
      temp.push(arr[i]);  
    }
    arr= arr.slice(i);
    arr.push(temp.join(''), 'ay');
    return arr.join('');
  }
}
