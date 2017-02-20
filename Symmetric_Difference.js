//Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
//sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].
//sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
//sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].
// Source: FreeCodeCamp

function sym(args) {
  const vals = Array.prototype.slice.call(arguments);
  const newVals = flatten(vals);
  const counts = tally(newVals);
  return newVals.reduce((res,curr)  => {
    if (counts[curr] % 2 && res.indexOf(curr) == -1) {
      res=res.concat(curr);
    }
    return res;
  },[]);
}

function flatten(args){
  return newVals = args.reduce((res,arr) => {
    let newArr = arr.reduce((sub,val) => {
      if(sub.indexOf(val) == -1) {
        sub.push(val);
      }
      return sub;
    },[]);
    return res.concat(newArr).sort();
  },[]);
}

function tally(arr) {
  return arr.reduce((res,curr)=>{
    if(res[curr] !== undefined) {
      res[curr]++;
    } else {
      res[curr] = 1;
    }
    return res;
  },{});
}
