# Function Overloading in TypeScript


Function overloading lets you **define multiple type signatures** for the same function.
Useful when a function behaves differently based on input types.

### Example 1: String vs Number Input

```ts
// Overload signatures
function reverse(str: string): string;
function reverse(arr: number[]): number[];

// Implementation
function reverse(value: string | number[]): string | number[] {
  if (typeof value === "string") {
    return value.split("").reverse().join("");
  } else {
    return value.slice().reverse();
  }
}

console.log(reverse("hello")); // "olleh"
console.log(reverse([1, 2, 3])); // [3, 2, 1]
```

- TypeScript ensures only **valid overload calls** are allowed.
- Implementation signature uses a **union type**.

---

### Example 2: Different Return Types

```ts
function format(value: number): string;
function format(value: string): string;
function format(value: boolean): string;

// Implementation
function format(value: number | string | boolean): string {
  return `Formatted: ${value}`;
}

console.log(format(42)); // "Formatted: 42"
console.log(format("Hi")); // "Formatted: Hi"
console.log(format(true)); // "Formatted: true"
```

 **Interview Tip**:

- **Typing functions** → ensures correctness and readability.
- **Overloading** → provides flexibility by defining multiple call signatures.
- In TS, only **one implementation** is allowed, but **multiple overload signatures** can be declared.
