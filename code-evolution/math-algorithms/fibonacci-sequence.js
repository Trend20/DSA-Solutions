// PROBLEM STATEMENT
/*
  Given a number `n`, find the first `n` elements of the fibonacci sequence.
  In mathematics, fibonacci sequence is a sequence in which each number is the sum of two preceding ones.
  // examples
  fibonacci(2) = [0,1]
  fibonacci(3) = [0, 1, 1]
  fibonacci(7) = [0, 1, 2, 3, 5, 8]

  The first two numbers in the sequence is 0 and 1.
*/

// solution
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(7));
