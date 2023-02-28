// PROBLEM STATEMENT
/*
  Given a natural number `n`, determine if the number is prime or not.
  In mathematics, a prime number is a natural number that is greater than 1, is divisible by either 1 or itself
  and is not a product of two smaller natural numbers.

  1 is not a prime number
  // examples
  primeNum(2) //true
  primeNum(3) //true
  primeNum(5) //true
   primeNum(4) //false
*/
function primeNum(n) {
  // check if n is greater than 1
  if (n < 2) {
    return false;
  }
  // loop through n
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(primeNum(2)); //true
console.log(primeNum(3)); //true
console.log(primeNum(5)); //true
console.log(primeNum(4)); //false
