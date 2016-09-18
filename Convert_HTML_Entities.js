// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
// convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
// Source: FreeCodeCamp

function convertHTML(str) {
  // &colon;&rpar;
  var entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };
  var arr = str.split('');
  return arr.map(letter => {
    if(entities[letter]){
      letter = entities[letter];
    }
     return letter;
  }).join('');
}
