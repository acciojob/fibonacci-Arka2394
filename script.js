function fibonacci(num) {
  // Error handling: return null for negative numbers
  if (num < 0) {
    return null;
  }
  
  // Memoization: store computed Fibonacci numbers in an array
  const memo = [0, 1];
  
  // Recursive helper function to calculate Fibonacci number
  function fib(n) {
    // If already computed, return memoized value
    if (memo[n] !== undefined) {
      return memo[n];
    }
    
    // Otherwise, calculate Fibonacci number and store in memo
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
  }
  
  // Call recursive helper function with initial value of num
  return fib(num);
}

module.exports = fibonacci;
