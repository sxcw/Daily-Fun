// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number. Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
// iqTest("2 4 7 8 10") => 3, Third number is odd, while the rest of the numbers are even
// iqTest("1 2 1 1") => 2, Second number is even, while the rest of the numbers are odd
// Source: Codewar

function iqTest(numbers){
  const vals = numbers.split(' ');
  const mp = vals.reduce((res,curr) => {
    res = res || {'odd':[], 'even': []}
    if (curr % 2 === 0) {
      res.even.push(curr);
    } else {
      res.odd.push(curr);
    }
    return res;
  },null);
  if(mp.odd.length === 1) {
    return vals.indexOf(mp.odd[0]) + 1;
  } else {
    return vals.indexOf(mp.even[0]) + 1;
  }
}

// more concise
function iqTest(numbers){
  numbers = numbers.split(" ").map(function(el){return parseInt(el)});
  
  var odd = numbers.filter(function(el){ return el % 2 === 1});
  var even = numbers.filter(function(el){ return el % 2 === 0});
  
  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}