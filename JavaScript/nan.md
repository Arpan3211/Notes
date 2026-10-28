# Explains NaN "Not-a-Number" in JavaScript


**Explanation**:

- "NaN in JavaScript means 'Not-a-Number.' It shows up when there's some math problem that doesn't make sense, like dividing by zero. To check for NaN, you can use **`isNaN()`**. It's like asking, 'Is this a weird math result?' If it's weird, **`isNaN()`** says 'true,'
- The **`isNaN()`** function is useful for checking whether a value is a valid number or not, especially when dealing with user input or calculations."

```jsx
console.log(isNaN(42)); // Output: false
console.log(isNaN("Hello")); // Output: true (because "Hello" can't be converted to a number)
console.log(isNaN(NaN)); // Output: true
```
