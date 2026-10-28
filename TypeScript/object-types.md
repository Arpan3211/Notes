# Object Types in TypeScript


### **1. What is an Object Type?**

In TypeScript, an **object type** describes the **shape** of an object:

- What **properties** it has.
- What **types** those properties are.
- What **methods** it may contain.

Example:

```ts
let user: { id: number; name: string; isAdmin: boolean } = {
  id: 1,
  name: "Arpan",
  isAdmin: true,
};
```

Here:

- `id` → must be `number`
- `name` → must be `string`
- `isAdmin` → must be `boolean`

### **2. Optional Properties**

Use `?` when a property may or may not exist.

```ts
let user: { id: number; name: string; email?: string } = {
  id: 1,
  name: "Arpan",
};
```

### **3. Readonly Properties**

Prevents changing values once assigned.

```ts
let config: { readonly apiKey: string } = { apiKey: "123" };
// config.apiKey = "456";  Error
```

### **4. Object Methods**

Object types can include function signatures.

```ts
let person: {
  name: string;
  greet: (msg: string) => void;
} = {
  name: "Arpan",
  greet: (msg: string) => console.log(`${msg}, I'm ${person.name}`),
};
```

### **5. Index Signatures**

When you don’t know all property names in advance:

```ts
let dictionary: { [key: string]: string } = {
  red: "#ff0000",
  green: "#00ff00",
};
```

- Key must be `string`
- Value must be `string`

### **6. Nested Object Types**

Objects can contain other objects:

```ts
let employee: {
  id: number;
  name: string;
  address: {
    city: string;
    zip: number;
  };
} = {
  id: 1,
  name: "Arpan",
  address: {
    city: "Nagpur",
    zip: 440001,
  },
};
```

### **7. Type Aliases for Objects**

Instead of repeating the same object type, create a `type`:

```ts
type User = {
  id: number;
  name: string;
  isAdmin?: boolean;
};

let user1: User = { id: 1, name: "Arpan" };
let user2: User = { id: 2, name: "John", isAdmin: true };
```

### **8. Interfaces for Objects**

Another way (like `type`, but extendable):

```ts
interface User {
  id: number;
  name: string;
}

let user: User = { id: 1, name: "Arpan" };
```

### **9. Intersection Types (Combine Objects)**

```ts
type Address = { city: string; zip: number };
type Employee = { id: number; name: string } & Address;

let emp: Employee = {
  id: 1,
  name: "Arpan",
  city: "Nagpur",
  zip: 440001,
};
```

### \*\*10. `object` vs `{}` vs `Object`

- `object` → any non-primitive value (`{}`, arrays, functions, etc.).
- `{}` → any value except `null` and `undefined`.
- `Object` → the JS global `Object` type (very loose).

Example:

```ts
let a: object; // any non-primitive
let b: {}; // any value except null/undefined
let c: Object; // very broad, includes primitives wrapped as objects
```

### Key Takeaways

- Object types define the **shape** of objects.
- Support **optional**, **readonly**, **methods**, **nested objects**, and **index signatures**.
- Use **type aliases** or **interfaces** for reusable shapes.
- Difference between `object`, `{}`, and `Object` is subtle but important.
