# What is short-circuit evaluation in Javascript


**Explanation**:

Short-circuit evaluation is a feature in JavaScript where logical operators like **`&&`** and **`||`** can skip evaluating the second operand if the result is already known from the first operand.

Let's take the **`&&`** operator as an example. It's often used for "and" conditions. If the left operand is **`false`**, the result is guaranteed to be **`false`**, so JavaScript doesn't bother checking the right operand. Here's a simple example using the console:

```jsx
console.log(true && "Hello"); // Output: "Hello" (Both operands are evaluated)
console.log(false && "World"); // Output: false (Right operand is skipped because the left one is false)
```

In the first example, both operands are evaluated, and we get "Hello" because both are truthy. In the second example, the left operand is **`false`**, so JavaScript doesn't need to check the right operand, and the result is **`false`**

Certainly! The **`||`** operator is often used for "or" conditions. If the left operand is **`true`**, the result is guaranteed to be **`true`**, so JavaScript skips evaluating the right operand. Here's an example:

```jsx
console.log(true || "Hello"); // Output: true (Right operand is skipped because the left one is true)
console.log(false || "World"); // Output: "World" (Both operands are evaluated)
```

In the first example, the left operand is **`true`**, so JavaScript doesn't need to check the right operand, and the result is **`true`**. In the second example, both operands are evaluated, and we get "World" because the left operand is falsy, and the right operand is used to determine the result.
