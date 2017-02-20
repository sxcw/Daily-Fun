// The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−− ·−−− ··− −·· ·.
// NOTE: Extra spaces before or after the code have no meaning and should be ignored.
// In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.
// Source: Codewar

//Naive solution 
const decodeMorse = function(morseCode){
  const words = morseCode.trim().split(' ');
  let hasSpace = false;
  return words.reduce((res,curr) => {
    if(curr == '' && !hasSpace){
      hasSpace = true;
      return res.concat(' ');
    } else if (curr == '' && hasSpace) {
      hasSpace = false;
      return res;
    }
    return res.concat(mp[curr])
  },'')
}

mp = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "...---...": "SOS",
  "-.-.--": '!',
  ".-.-.-": '.'
};

// Better

const decodeMorse = function(morseCode){
  function decodeLetter(letter) {
    return MORSE_CODE[letter];
  }

  function decodeWord(word) {
    return word.split(' ').map(decodeLetter).join('');
  }
  return morseCode.trim().split('   ').map(decodeWord).join(' ');
}