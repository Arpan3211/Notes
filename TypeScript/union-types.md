# Union Types


### Union Types in TypeScript

### Definition

- **Union types** allow a variable to hold **more than one type**.
- You use the **`|` (pipe symbol)** to define a union type.
- It’s useful when a value can logically be one of several types.

### Syntax

```ts
let variable: string | number;
```

This means `variable` can be either a **string** OR a **number**.

### Example 1 – Basic

```ts
let id: string | number;

id = 101; //  number is allowed
id = "ABC123"; //  string is allowed
// id = true;    //  Error, not allowed
```

### Example 2 – Functions with Union Types

```ts
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log("ID in Uppercase:", id.toUpperCase());
  } else {
    console.log("ID in Number format:", id);
  }
}

printId(101); // 
printId("abc123"); // 
```

Here, **Type Narrowing** (using `typeof`) ensures correct usage inside the function.

### Example 3 – Arrays with Union Types

```ts
let data: (string | number)[] = [1, "hello", 42, "typescript"];
```

 The array can contain both **strings** and **numbers**.

### Example 4 – Union with Custom Types

```ts
type Success = { status: "success"; data: string };
type Error = { status: "error"; message: string };

type ApiResponse = Success | Error;

function handleResponse(res: ApiResponse) {
  if (res.status === "success") {
    console.log("Data:", res.data);
  } else {
    console.log("Error:", res.message);
  }
}
```

 This is very common in **real-world APIs**.

### Key Points (for Interview)

- `|` is used to define **union types**.
- A variable can hold **one type at a time**, not both simultaneously.
- Use **type narrowing** (`typeof`, `in`, `instanceof`) to safely work with unions.
- Often combined with **custom types** to model real-world scenarios.

 **One-line Interview Answer:**
“Union types in TypeScript let a variable hold multiple possible types using the `|` operator, and we use type narrowing to safely access specific type properties.”
