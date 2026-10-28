# What are first class functions


**Explanation:**

- In JavaScript, functions are treated as first-class citizens, which means they can be assigned to variables, passed as arguments, and returned from other functions. This enables the usage of callbacks.
- In programming languages, including JavaScript, first-class functions refer to the concept of treating functions as values, allowing them to be assigned to variables, passed as arguments to other functions, and returned from functions.

#### Functions can be assigned to variables:

```jsx
var add = function (a, b) {
  return a + b;
};

console.log(add(2, 3)); // Output: 5
```

#### Functions can be returned from other functions:

```jsx
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

var multiplyByTwo = multiplier(2);
console.log(multiplyByTwo(5)); // Output: 10
```

#### Functions can be passed as arguments to other functions:

```jsx
function greet(name) {
  console.log("Hello, " + name + "!");
}

function sayHello(callback) {
  callback("John");
}

sayHello(greet); // Output: Hello, John!
```

#### Functions can be stored in data structures:

```jsx
var mathOperations = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};

console.log(mathOperations.add(2, 3)); // Output: 5
```

The concept of first-class functions is powerful as it enables higher-order functions, functional programming paradigms, and greater flexibility in designing and structuring code. It allows functions to be treated as data, opening up possibilities for creating more dynamic and expressive programs
