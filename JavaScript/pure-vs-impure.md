# What is the difference between Pure and Impure functions


In programming, especially in the context of functional programming, the distinction between **pure** and **impure functions** is important for understanding code behavior, predictability, and side effects. Here’s a breakdown of the differences between the two:

#### **Pure Functions**

**Definition**: A pure function is a function that satisfies two main properties:

1. **Deterministic**: Given the same inputs, it always produces the same output. The output depends only on the input values passed to the function, and not on any external state.

2. **No Side Effects**: A pure function does not cause any observable side effects. This means it does not modify any external state, such as global variables, input/output operations, or the values of passed arguments.

#### **Characteristics of Pure Functions**:

- Predictable and easier to test.
- Can be memoized or cached for performance optimizations since their output is always the same for the same inputs.
- Generally easier to reason about, leading to better maintainability.

#### **Example of a Pure Function**:

```javascript
function add(a, b) {
  return a + b; // Always returns the same output for the same inputs
}

console.log(add(2, 3)); // Outputs: 5
console.log(add(2, 3)); // Outputs: 5 (same inputs give same outputs)
```

#### **Impure Functions**

**Definition**: An impure function is a function that does not meet the criteria of pure functions. It may exhibit one or both of the following characteristics:

1. **Non-Deterministic**: It may produce different outputs given the same inputs. This can happen due to dependence on external state, such as global variables or data from APIs.

2. **Side Effects**: It may modify some external state or have observable effects outside the function's scope, such as changing a global variable, logging to the console, or modifying an object passed as an argument.

#### **Characteristics of Impure Functions**:

- Less predictable and can lead to bugs due to changes in external state.
- More difficult to test since the output can vary based on external factors.
- Can complicate reasoning about the code's behavior.

#### **Example of an Impure Function**:

```javascript
let count = 0; // Global variable

function increment() {
  count += 1; // Modifies external state
  return count; // The output depends on external state
}

console.log(increment()); // Outputs: 1
console.log(increment()); // Outputs: 2 (different outputs for the same function call)
```

#### **Key Differences**

| **Aspect** | **Pure Functions** | **Impure Functions** |
| ---------------- | ---------------------------------------------------- | --------------------------------------------------------------------- |
| **Determinism** | Always produce the same output for the same inputs   | Can produce different outputs for the same inputs                     |
| **Side Effects** | No side effects (do not modify external state)       | May cause side effects (modify external state, etc.)                  |
| **Testing** | Easier to test and reason about                      | Harder to test due to dependency on external state                    |
| **Memoization** | Can be memoized for performance gains                | Cannot be effectively memoized due to varying output                  |
| **Use Cases** | Ideal for mathematical calculations, transformations | Suitable for operations that require external interaction (e.g., I/O) |

#### **When to Use Each**

- **Pure Functions**: Prefer pure functions for operations where predictability, testability, and maintainability are crucial. They are commonly used in functional programming paradigms.
- **Impure Functions**: Use impure functions when dealing with external systems (e.g., interacting with databases, performing I/O operations) where side effects are necessary.

#### **Summary**

- **Pure functions** are deterministic and have no side effects, making them predictable and easy to test.
- **Impure functions** may have side effects and produce varying outputs, leading to potential unpredictability and difficulty in testing.

Understanding the difference between pure and impure functions helps developers write cleaner, more maintainable, and more predictable code, especially in large codebases or functional programming contexts.
