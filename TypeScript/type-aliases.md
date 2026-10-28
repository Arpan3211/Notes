# Type Aliases


### What are Type Aliases?

- A **Type Alias** lets you **give a name** to a type in TypeScript.
- It doesn’t create a new type — it’s just a **shortcut / alias** for an existing type.
- Helps make code **readable, reusable, and maintainable**.

### Syntax

```ts
type AliasName = Type;
```

### Examples

### 1. Basic Alias

```ts
type ID = number | string;

let userId: ID = 101; // number
let postId: ID = "p42"; // string
```

 Here `ID` is an alias for `number | string`.

### 2. Alias for Object Types

```ts
type User = {
  id: number;
  name: string;
};

const user: User = { id: 1, name: "Arpan" };
```

 Instead of repeating `{id: number; name: string;}` everywhere, we reuse `User`.

### 3. Alias with Union

```ts
type Status = "success" | "error" | "loading";

let currentStatus: Status = "success"; // 
currentStatus = "error"; // 
```

 Restricts values to specific string literals.

### 4. Alias with Functions

```ts
type Callback = (data: string) => void;

const log: Callback = (msg) => console.log(msg);
```

 `Callback` is a function type alias.

### 5. Alias with Intersection

```ts
type Person = { name: string };
type Employee = { id: number };

type Staff = Person & Employee;

const staff: Staff = { name: "Arpan", id: 101 };
```

### Difference: Type Alias vs Interface

| Feature                  | Type Alias                                  | Interface                               |
| ------------------------ | ------------------------------------------- | --------------------------------------- |
| Can define primitives    | Yes                                      | No                                   |
| Extendable (Inheritance) | Yes (via intersections `&`)              | Yes (`extends`)                      |
| Declaration Merging      | No                                       | Yes                                  |
| Use Case                 | Great for **unions, primitives, functions** | Great for **objects & class contracts** |

---

 **Interview Answer (Short):**
“A Type Alias in TypeScript gives a custom name to a type, whether primitive, union, object, or function. It improves readability and reusability. Unlike interfaces, type aliases can represent primitives and unions, but interfaces support declaration merging.”
