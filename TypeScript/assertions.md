# Assertions


### What are Assertions in TypeScript?

Assertions tell the TypeScript compiler **how you want to treat a value**.
They don’t change the runtime behavior, only the compile-time type checking.

Think of them as:
 _“Hey TypeScript, trust me, I know this value better than you.”_

### 1. **Type Assertion (`as Type`)**

- Used to tell TS the exact type of a value.
- Similar to type casting in other languages, but no runtime change.

```ts
let someValue: unknown = "Hello TS";

let strLength: number = (someValue as string).length;
```

 Here we **assert** that `someValue` is a `string`, so `.length` is valid.

### 2. **`as any` Assertion**

- When you **don’t know** or **don’t care** about the type, you can override TypeScript’s type checking.
- Essentially says: _“Treat this as `any`”_.

```ts
let num: number = 10;

// Force treat as any
console.log((num as any).toFixed(1000)); // Compiler won’t complain
```

 Dangerous because it removes type safety.

### 3. **`as const` Assertion**

- Freezes the value as a **literal type** instead of a general type.
- Makes objects **readonly** and prevents widening of types.

```ts
let colors = ["red", "blue", "green"] as const;
// type: readonly ["red", "blue", "green"]

// Without "as const" → type would be string[]
```

 Commonly used for constants, enums, or discriminated unions.

### 4. **Non-Null Assertion (`!`)**

- Used when you know a value is **not null or undefined**, even if TS thinks it might be.

```ts
let name: string | null = "Arpan";

console.log(name!.toUpperCase());
// "!" tells TS: don’t worry, name is not null
```

 Use carefully — if the value **is actually null**, you’ll get a runtime error.

### 5. **`satisfies` Keyword (TS 4.9+)**

- Ensures a value **conforms to a type** without changing its inferred type.
- Safer than `as` because it keeps strong type inference.

```ts
type User = { name: string; age: number };

const user = {
  name: "Arpan",
  age: 22,
  extra: "ignored",
} satisfies User;
```

 Difference from `as`:

- `as` **forces** TS to accept type (even if wrong).
- `satisfies` **checks** compatibility while keeping actual type inference.

### Quick Interview Summary

| Assertion      | Purpose                                        | Example                      |
| -------------- | ---------------------------------------------- | ---------------------------- |
| `as Type`      | Narrow down / specify type                     | `(value as string).length`   |
| `as any`       | Escape hatch, bypass type safety               | `(value as any).dangerous()` |
| `as const`     | Literal + readonly inference                   | `["a", "b"] as const`        |
| `!` (Non-Null) | Tell TS value is never null                    | `value!.toFixed()`           |
| `satisfies`    | Ensures compatibility without losing inference | `obj satisfies MyType`       |

 **One-liner interview answer:**
“Assertions in TypeScript let you override or refine type inference. We have `as Type`, `as any`, `as const`, the non-null `!` operator, and the `satisfies` keyword — each serving different safety vs flexibility trade-offs.”
