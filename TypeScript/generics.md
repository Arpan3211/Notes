# Generics


### What are Generics?

Generics in TypeScript allow you to create **reusable components** that can work with **different data types** while maintaining **type safety**.
They are like **type placeholders** (`T`, `U`, etc.) that get replaced with actual types when the code is used.

 Without Generics:

```ts
function identity(value: any): any {
  return value;
}

let result = identity(10); // type: any  (no type safety)
```

 With Generics:

```ts
function identity<T>(value: T): T {
  return value;
}

let result1 = identity<number>(10); // type: number
let result2 = identity("Hello"); // type: string
```

Here `T` is a **generic type parameter**. It adapts based on what you pass in.

### Generic Types

Generics can be used in **functions, interfaces, classes, and type aliases**.

### Function with Generics

```ts
function getArray<T>(items: T[]): T[] {
  return items;
}

let numArray = getArray<number>([1, 2, 3]); // number[]
let strArray = getArray<string>(["a", "b"]); // string[]
```

### Interface with Generics

```ts
interface Box<T> {
  content: T;
}

let numberBox: Box<number> = { content: 123 };
let stringBox: Box<string> = { content: "Hello" };
```

### Class with Generics

```ts
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  getItems(): T[] {
    return this.data;
  }
}

const stringStorage = new DataStorage<string>();
stringStorage.addItem("Apple");
```

---

### Generic Constraints

Sometimes you want to **restrict** what type can be used in Generics. You can use the `extends` keyword.

### Example 1 – Constraint with object type

```ts
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength("Hello"); //  works (string has length)
getLength([1, 2, 3]); //  works (array has length)
// getLength(123);       //  Error (number has no length)
```

### Example 2 – Constraint with keyof

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let person = { name: "Arpan", age: 22 };

getProperty(person, "name"); //  "Arpan"
// getProperty(person, "salary"); //  Error (not in person)
```

### Interview One-Liners

- **Generics** = write flexible code that works with multiple types safely.
- **Generic Types** = placeholders like `T`, `U`, used in functions, interfaces, classes.
- **Generic Constraints** = restrict what kind of types can be used (using `extends`).
