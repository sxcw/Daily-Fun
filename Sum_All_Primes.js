// Sum All Primes
// Sum all the prime numbers up to and including the provided number.
// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
// sumPrimes(10) should return 17. sumPrimes(977) should return 73156.
// Source: FreeCodeCamp


function sumPrimes(num) {
  var res = 0;
  for (var i = 2; i <= num; i++) {
    if(checkPrime(i)) {
      res += i;
    }
  }
  return res;
}

function checkPrime(num) {
  if(num <= 3 && num > 1) return true;
  for(var i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if(num % i === 0){
      return false;
    }
  }
  return true;
}