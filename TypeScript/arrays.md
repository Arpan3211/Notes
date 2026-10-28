# Arrays


### **1. What is an Array?**

An **array** in TypeScript is a data structure used to store **multiple values of the same type** in an ordered collection.

Unlike plain JavaScript, TypeScript enforces **type safety** for array elements.

### **2. Declaring Arrays**

You can declare arrays in two ways:

### **(a) Using `type[]` syntax**

```ts
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Arpan", "John", "Sara"];
```

### **(b) Using `Array<type>` syntax**

```ts
let numbers: Array<number> = [1, 2, 3, 4];
let names: Array<string> = ["Arpan", "John", "Sara"];
```

Both are equivalent — which one you use is personal preference.

### **3. Mixed / Union Type Arrays**

You can allow multiple types:

```ts
let mixed: (string | number)[] = ["Hello", 42, "World"];
```

### **4. Readonly Arrays**

Prevents modification of elements.

```ts
let arr: readonly number[] = [10, 20, 30];
// arr.push(40);  Error
```

Or using `ReadonlyArray<T>`:

```ts
let arr: ReadonlyArray<string> = ["a", "b"];
```

### **5. Array Methods (Type-Safe)**

TypeScript knows what type of values are inside, so methods are type-safe:

```ts
let numbers: number[] = [1, 2, 3];

numbers.push(4); //  OK
// numbers.push("hi"); //  Error (must be number)

let doubled = numbers.map((num) => num * 2); // number[]
```

### **6. Tuple (Special Array)**

Tuples are fixed-length arrays with defined types at each index.

```ts
let person: [string, number] = ["Arpan", 22];
// person[0] must be string, person[1] must be number
```

Useful when you want **exact structure** (like database rows, key-value pairs).

### **7. Multi-dimensional Arrays**

You can define arrays of arrays:

```ts
let matrix: number[][] = [
  [1, 2],
  [3, 4],
];
```

### **8. Spread & Rest with Arrays**

```ts
let arr1: number[] = [1, 2];
let arr2: number[] = [...arr1, 3, 4]; // Spread

function sum(...nums: number[]) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```

### **9. Arrays with Interfaces & Types**

```ts
interface User {
  id: number;
  name: string;
}

let users: User[] = [
  { id: 1, name: "Arpan" },
  { id: 2, name: "John" },
];
```

### **10. Key Takeaways**

- Arrays in TypeScript are **typed** — ensures no accidental wrong elements.
- You can use `type[]` or `Array<type>` syntax.
- Supports **readonly**, **union arrays**, **tuples**, **multi-dimensional arrays**.
- Methods like `map`, `filter`, `reduce` are type-aware.
