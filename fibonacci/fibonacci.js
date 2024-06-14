// write a function that returns the nth number in the fibonacci sequence
// the fibonacci sequence is 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// the nth number is the sum of the previous two numbers in the sequence
// the 0th number is 0, the 1st number is 1, and the 2nd number is 1
// the function should return -1 if the input is negative

function fibonacci(n) {
  if (n < 0) return -1;
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0;
  let b = 1;
  let c = 1;

  for (let i = 2; i < n; i++) {
    a = b;
    b = c;
    c = a + b;
  }

  return c;
}

module.exports = fibonacci;