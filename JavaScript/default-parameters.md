# Explains default parameters in JavaScript


**Explanation**:

- Default parameters, introduced in ECMAScript 6 (ES6), allow you to set default values for function parameters.
- This feature makes it easier to handle cases where a function is called without providing values for all of its parameters.
- If a parameter is not provided by the caller, the default value is used instead.

```jsx
function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greet("John"); // Output: "Hello, John!"
greet(); // Output: "Hello, Guest!" (default parameter used)
```
