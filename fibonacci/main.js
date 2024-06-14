// Import the fibonacci function from the fibonacci.js file
const fibonacci = require('./fibonacci.js');

// main method to run the fibonacci function
function main() {
  const n = 155; // replace with the desired number
  const result = fibonacci(n);
  console.log(`The ${n}th number in the Fibonacci sequence is ${result}`);

  console.log('Index\tFibonacci Number');
  for (let i = 1; i <= 10; i++) {
    console.log(`${i}\t${fibonacci(i)}`);
  }
}

main();