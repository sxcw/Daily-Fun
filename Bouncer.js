// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
// Source: FreeCodeCamp

function bouncer(arr) {
  var check = function(value) {
    if(value === false || value === null || value === 0 || value === undefined || isNaN(value) && typeof value === 'number' || value.length === 0)  {
      return false;
    } else {
      return true;
    }
  }
  return arr.filter(element => {
    return check(element);
  })
}
