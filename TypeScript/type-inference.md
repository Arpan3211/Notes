# Type Inference


### What is Type Inference in TypeScript?

Type Inference is when **TypeScript automatically determines the type of a variable, parameter, or return value** without you explicitly writing it.
 In short: **TypeScript guesses the type for you based on how you use it.**

### Examples of Type Inference

### 1. Variable Inference

```ts
let count = 10; // inferred as number
// count = "hello";  Error (because TS inferred `number`)
```

### 2. Function Return Type

```ts
function add(a: number, b: number) {
  return a + b;
}
// TS infers return type as number
```

### 3. Default Parameter Inference

```ts
function greet(name = "Guest") {
  return `Hello, ${name}`;
}
// `name` inferred as string
```

### 4. Contextual Typing

TypeScript can infer the type **based on where the value is used**:

```ts
document.addEventListener("click", (event) => {
  // TS infers event: MouseEvent
  console.log(event.clientX);
});
```

### 5. Best Common Type

When you mix values in an array, TS finds the **common type**:

```ts
let arr = [1, 2, 3]; // number[]
let mixed = [1, "hi"]; // (string | number)[]
```

### Why is Type Inference Important?

- Reduces boilerplate (no need to write types everywhere).
- Keeps code clean but still safe.
- Makes TypeScript **smarter than plain JavaScript**, but without being too strict.

 **Interview one-liner:**
“Type Inference in TypeScript is when the compiler automatically infers the type of a variable or return value based on how it’s initialized or used. For example, `let x = 10` is inferred as `number` without explicitly writing the type.”
