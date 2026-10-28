# Interface


### **1. What is an Interface?**

In TypeScript, an **interface** is a way to define the **shape** (structure) of an object.
It tells the compiler:

> “Any object of this type must have these properties/methods with these types.”

It’s **only for type-checking** at compile time — it disappears in JavaScript after compilation.

### **2. Basic Example**

```ts
interface User {
  id: number;
  name: string;
  isAdmin: boolean;
}

const user1: User = {
  id: 1,
  name: "Arpan",
  isAdmin: true,
};
```

Here:

- `User` says any object of type `User` **must** have `id`, `name`, and `isAdmin` with specified types.
- Missing or extra properties (not allowed unless using index signatures) cause compile-time errors.

### **3. Optional Properties**

Add `?` if a property may or may not exist.

```ts
interface User {
  id: number;
  name: string;
  email?: string; // Optional
}

const user2: User = { id: 2, name: "John" }; //  email not required
```

### **4. Readonly Properties**

Prevent modification after initialization.

```ts
interface Config {
  readonly apiKey: string;
}

const config: Config = { apiKey: "123abc" };
// config.apiKey = "456def";  Error
```

### **5. Methods in Interfaces**

Interfaces can define function signatures.

```ts
interface Person {
  name: string;
  greet(message: string): void;
}

const person1: Person = {
  name: "Arpan",
  greet(msg) {
    console.log(`${msg}, I'm ${this.name}`);
  },
};
```

### **6. Function Type Interfaces**

An interface can describe a callable function’s signature.

```ts
interface Add {
  (a: number, b: number): number;
}

const addNumbers: Add = (x, y) => x + y;
```

### **7. Extending Interfaces**

One interface can **inherit** from another.

```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = { name: "Buddy", breed: "Labrador" };
```

- Supports **multiple inheritance**:

```ts
interface A {
  a: string;
}
interface B {
  b: number;
}
interface C extends A, B {}
```

### **8. Index Signatures**

For objects with dynamic property names.

```ts
interface Dictionary {
  [key: string]: string;
}

const colors: Dictionary = {
  red: "#ff0000",
  green: "#00ff00",
};
```

### **9. Interfaces vs. Types**

| Feature              | Interface        | Type Alias (`type`)                        |
| -------------------- | ---------------- | ------------------------------------------ |
| Extendable later     | Yes           | No (but can combine with intersections) |
| Multiple inheritance | Yes           | Yes (via intersections)                 |
| Can describe unions  | No            | Yes                                     |
| Best for             | Objects, classes | Anything (objects, unions, primitives)     |

### **10. Interfaces with Classes**

Interfaces are often used for **class contracts**.

```ts
interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {}
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
```

If `Circle` misses `getArea`, TypeScript will throw an error.

### **Key Takeaways**

- **Purpose**: Defines object/class shape for type-checking.
- Supports **optional**, **readonly**, **methods**, and **index signatures**.
- Extensible — great for designing APIs and contracts.
- Disappears at runtime (only compile-time construct).
