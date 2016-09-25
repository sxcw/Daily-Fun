// flatten a nested array into a flat (1D) array

const flatten = arrays => {
  return arrays.reduce( (result, curr) => {
    if (Array.isArray(curr)) {
      result = result.concat(flatten(curr));
    } else {
      result = result.concat([curr]); 
    }
    return result;
  }, [])
};

// flatten([1,2,[3,4,[5,6,7],8],9]) => [1,2,3,4,5,6,7,8,9]