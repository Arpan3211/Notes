# Never


### `never` in TypeScript

- `never` represents **values that never occur**.
- A function or expression with type `never` **never successfully returns** — it either **throws an error** or **loops forever**.
- It’s the **opposite of `any`**: while `any` means _"can be anything"_, `never` means _"cannot be anything"_.

### Example 1: Function that always throws

```ts
function throwError(message: string): never {
  throw new Error(message); // function never reaches the end
}
```

### Example 2: Infinite loop

```ts
function infiniteLoop(): never {
  while (true) {
    // runs forever, never returns
  }
}
```

### Example 3: Exhaustiveness checking

```ts
type Shape = "circle" | "square";

function getArea(shape: Shape): number {
  switch (shape) {
    case "circle":
      return 3.14;
    case "square":
      return 4;
    default:
      // Ensures all cases are handled
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
```

 Here, if we later add `"triangle"` to `Shape` but forget to handle it in the switch, TypeScript will throw an error.

### Key Interview Points

- `never` is used for **impossible states**, **error handling functions**, and **exhaustive checks**.
- Unlike `void`, which means “returns nothing” (but still returns `undefined`), `never` means **function never returns at all**.
- `never` is a subtype of every type, but **no type is a subtype of `never`**.

 **One-line Interview Answer:**
“`never` in TypeScript represents values that never occur. It’s commonly used for functions that never return (like errors or infinite loops) and for exhaustive type checking.”
