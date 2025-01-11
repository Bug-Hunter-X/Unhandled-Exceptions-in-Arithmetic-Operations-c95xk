function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      throw new Error('Invalid operator');
  }
}

console.log(operate('+', 5, 3)); // Output: 8
console.log(operate('-', 10, 4)); // Output: 6
console.log(operate('*', 7, 2)); // Output: 14
console.log(operate('/', 15, 3)); // Output: 5
console.log(operate('/', 10,0)); // throws error
console.log(operate('%',10,3)); // throws error