// Roman Numeral Converter
// Convert the given number into a roman numeral.
// convertToRoman(649) should return "DCXLIX"
// convertToRoman(3999) should return "MMMCMXCIX"
// Source: FreeCodeCamp

function convertToRoman(num) {
  var romans = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  var numbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  var result = '';
  if (num > 0) {
    for (var i = 0; i < numbers.length; i++) {
      while (numbers[i] <= num) {
        result += romans[i];
        num -= numbers[i];
      }
    }
  }
  return result; 
}
