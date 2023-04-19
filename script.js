function fibonacci(num) {
  // Base case: return 0 for num=0 and 1 for num=1
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  }
  
  // Recursive case: sum of two previous Fibonacci numbers
  return fibonacci(num - 1) + fibonacci(num - 2);
}
