// PROBLEM STATEMENT
/*
  Given an integer `n`, find the factorial of that integer.
  In mathematics, factorial of a non-negative integer `n` denoted as (!n) is 
  the product of all positive integers less than or equal to n
  Factorial of both zero and one is 1.
  // examples
  factorial(2) = 2 * 1 = 2;
  factorial(3) = 3 * 2 * 1 = 6
  factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
*/

// solution
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(5));
