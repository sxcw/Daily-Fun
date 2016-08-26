// Return the length of the longest word in the provided sentence.
// Your response should be a number.
// Source: FreeCodeCamp

function findLongestWord(str) {
  // split str into array and return the highest number
  // reduce returns a single value 
  return str.split(' ').reduce((result,curr) => {
    if(curr.length > result) {
      result = curr.length;
    }
    return result;
  },0);      
}

