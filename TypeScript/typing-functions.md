# Typing Functions and Function Overloading



## 1. **Typing Functions in TypeScript**

In TypeScript, we can define types for a function’s **parameters** and **return value**.
This ensures **type safety** and prevents accidental mistakes.

### Example 1: Basic Function Typing

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

- `a: number` and `b: number` → parameter types
- `: number` → return type

### Example 2: Function Expression Typing

```ts
const greet: (name: string) => string = (name) => {
  return `Hello, ${name}`;
};
```

Here, `(name: string) => string` defines the **function type**.

### Example 3: Optional & Default Parameters

```ts
function logMessage(message: string, user?: string): void {
  console.log(user ? `${user}: ${message}` : message);
}

function multiply(a: number, b: number = 2): number {
  return a * b;
}
```

- `user?: string` → optional parameter
- `b: number = 2` → default parameter

### Example 4: Rest Parameters

```ts
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}
```
