// accum("abcd")=> "A-Bb-Ccc-Dddd"
// accum("RqaEzty")=>  "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt")=>   "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
// Source: Codewar

function accum(s) {
  let str = s.split('').reduce((res,curr,index) => {
    res += curr.toUpperCase() + multiply(curr.toLowerCase(), index) + '-';
    index ++;
    return res;
  },'')
  return str.substring(0,str.length-1);
}

function multiply(letter,times) {
  let val = '';
  for (let i = 0; i < times; i++) {
    val += letter;
  }
  return val;
}


// more concise
function accum(s) {
  return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}