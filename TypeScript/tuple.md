# Tuple


### **1. What is a Tuple?**

A **tuple** is an array with:

- A **fixed length**
- A **specific type for each element**

> Think of it as: _“An array with a strict structure.”_

### **2. Basic Example**

```ts
let person: [string, number] = ["Arpan", 22];

// person[0] → must be string
// person[1] → must be number
```

If you try to swap:

```ts
// person = [22, "Arpan"];  Error
```

### **3. Tuple vs Array**

| Feature | Array             | Tuple                             |
| ------- | ----------------- | --------------------------------- |
| Length  | Flexible          | Fixed (unless defined with `...`) |
| Types   | All elements same | Each element has its own type     |
| Example | `number[]`        | `[string, number]`                |

### **4. Optional Elements in Tuples**

You can make some positions optional:

```ts
let user: [string, number?];
user = ["Arpan"]; //  Allowed
user = ["Arpan", 22]; //  Allowed
```

### **5. Rest Elements in Tuples**

Useful for variable-length tuples.

```ts
let fruits: [string, ...string[]];
fruits = ["apple"];
fruits = ["apple", "banana", "cherry"];
```

### **6. Readonly Tuples**

Prevents modifying tuple values.

```ts
let point: readonly [number, number] = [10, 20];
// point[0] = 30;  Error
```

### **7. Destructuring Tuples**

You can unpack tuple values easily.

```ts
let person: [string, number] = ["Arpan", 22];
let [name, age] = person;

console.log(name); // "Arpan"
console.log(age); // 22
```

### **8. Practical Use Cases**

- **Function return multiple values**:

```ts
function getUser(): [string, number] {
  return ["Arpan", 22];
}

const [name, age] = getUser();
```

- **Key-value pairs**:

```ts
let entry: [string, number] = ["age", 22];
```

- **Database row representation**:

```ts
type Row = [id: number, name: string, active: boolean];
const userRow: Row = [1, "Arpan", true];
```

### **9. Limitations**

- Tuples are stricter than arrays — you **cannot** push new values beyond their defined structure unless you use `...rest`.
- For flexible arrays, use `type[]` instead.

### Key Takeaways

- A **tuple** is a **fixed-size, ordered collection** with types known at each index.
- Supports **optional elements**, **rest elements**, **readonly tuples**, and **destructuring**.
- Best when you want to enforce a **structured set of values**.
