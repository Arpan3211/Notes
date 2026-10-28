# Higher order function


**Explanation:**

1. **Definition**: A higher-order function is a function that either takes one or more functions as arguments or returns a function as its result. Higher-order functions enable behavior parameterization and can be used to create more reusable and flexible code.
2. **Usage**: Higher-order functions are used to abstract and encapsulate common patterns or behaviors, often by providing a level of indirection.

```jsx
function filterArray(array, filterFn) {
  const filtered = [];
  for (const item of array) {
    if (filterFn(item)) {
      filtered.push(item);
    }
  }
  return filtered;
}
const numbers = [1, 2, 3, 4, 5, 6];

const isEven = (num) => num % 2 === 0;

const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers); // Output: [2, 4, 6]

//---------------------------------------------------------------

// Higher-Order Function that returns a function
function operationFactory(operation) {
  // The returned function takes two numbers and performs the specified operation
  return function (a, b) {
    return operation(a, b);
  };
}

// Define functions to perform specific mathematical operations
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
  return a / b;
}

// Use the operationFactory HOF to create operation functions
const addFunction = operationFactory(add);
const subtractFunction = operationFactory(subtract);
const multiplyFunction = operationFactory(multiply);
const divideFunction = operationFactory(divide);

// Now, you can use these generated functions to perform operations
console.log(addFunction(5, 3)); // 8
console.log(subtractFunction(10, 4)); // 6
console.log(multiplyFunction(6, 7)); // 42
console.log(divideFunction(100, 5)); // 20
```
