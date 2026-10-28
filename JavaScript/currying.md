# What Is Currying in JavaScript


**Explanation:**

- Currying in js is transform a functions with multiple arguments into a nested series of function.
- each taking a single argument.
- Currying helps you avoid passing the same variable multiple times, and it helps you create a higher order function.

Regular function

```jsx
function sum(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
console.log(sum(1)(2)(3)); // 6
```

Arrow function

```jsx
const add = (x) => (y) => x + y;

console.log(add(2)(3)); // 5
```
