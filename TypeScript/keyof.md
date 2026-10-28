# Keyof Operator


### What is `keyof`?

- `keyof` is a **TypeScript type operator**.
- It takes an **object type** and produces a **union of its keys** (as string or number literal types).

 Think of it as **"get all property names of a type as a union"**.

### Syntax

```ts
type Keys = keyof Type;
```

### Examples

### 1. Basic Example

```ts
type User = {
  id: number;
  name: string;
  isActive: boolean;
};

type UserKeys = keyof User;
// "id" | "name" | "isActive"

let key: UserKeys;

key = "id"; // 
key = "isActive"; // 
key = "email"; //  Error: Type '"email"' is not assignable
```

 `keyof User` gives a union `"id" | "name" | "isActive"`.

### 2. With Index Signatures

```ts
type Dictionary = {
  [key: string]: number;
};

type DictKeys = keyof Dictionary;
// string | number
```

 If an object uses index signatures, `keyof` returns `string | number`.

### 3. With Functions

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "Arpan" };

let nameValue = getProperty(user, "name"); // string
let idValue = getProperty(user, "id"); // number
```

 `keyof` + **generics** allows building **type-safe utilities** like `getProperty`.

### 4. `keyof` with Mapped Types

```ts
type Options = {
  darkMode: boolean;
  notifications: boolean;
};

type Flags = {
  [K in keyof Options]: string;
};

// Equivalent to:
// type Flags = {
//   darkMode: string;
//   notifications: string;
// }
```

 Often used in **utility types**.

### Real-World Use Case

Imagine you want to build a **type-safe form validator**:

```ts
type Form = {
  email: string;
  password: string;
};

function validateField(field: keyof Form, value: string) {
  console.log(`Validating ${field}: ${value}`);
}

validateField("email", "arpan@test.com"); // 
validateField("username", "arpan"); //  Error
```

 Prevents passing invalid field names.

### Summary (Interview-Friendly)

- `keyof` gives you a **union of keys** from an object type.
- Helps create **type-safe functions** and **utility types**.
- Works great with **generics** for reusable code.

 Common Interview Question:
**“What does `keyof` do in TypeScript, and how would you use it in a real project?”**

 Answer:
"`keyof` extracts the property names of a type as a union of string (or number) literal types. It’s useful for creating type-safe functions, like `getProperty`, or building mapped/utility types. For example, in a form validator, using `keyof` ensures we can only reference valid field names."
