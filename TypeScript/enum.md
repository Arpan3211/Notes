# Enum


### **1. What is an Enum?**

An **`enum`** (short for _enumeration_) in TypeScript is a way to define a **set of named constants**.
It makes your code more readable and type-safe compared to using plain strings or numbers.

### **2. Basic Example – Numeric Enum**

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;
console.log(move); // 0  (default starts at 0)
```

- By default, the first member is `0`, and the rest are incremented by 1.
- `Direction.Up` → `0`, `Direction.Down` → `1`, etc.

### **3. Custom Values**

```ts
enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}

console.log(Status.Success); // 200
```

You can set custom values, and following members will auto-increment unless explicitly set.

### **4. String Enums**

```ts
enum Colors {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

let favorite: Colors = Colors.Green;
console.log(favorite); // "GREEN"
```

- Values are always strings (no auto-increment here).
- Good for logging, API responses, and human-readable code.

### **5. Mixed Enums**

You can mix strings and numbers, but **not recommended** for clarity.

```ts
enum Mixed {
  No = 0,
  Yes = "YES",
}
```

### **6. Reverse Mapping (Only for Numeric Enums)**

```ts
enum Direction {
  Up,
  Down,
}

console.log(Direction[0]); // "Up"
console.log(Direction["Up"]); // 0
```

- Works only for numeric enums, not string enums.

### **7. `const enum`**

- **Faster & smaller compiled JS**.
- Completely inlined at compile time (no enum object generated).

```ts
const enum Direction {
  Up,
  Down,
}

let dir = Direction.Up;
```

- Compiles directly to:

```js
var dir = 0; // no extra enum object
```

### **8. Use Cases**

- **Directions & navigation**
- **Status codes**
- **App modes (light/dark theme)**
- **Form steps**
- **Role-based access**

Example:

```ts
enum Role {
  Admin,
  User,
  Guest,
}

function hasAccess(role: Role) {
  return role === Role.Admin;
}

console.log(hasAccess(Role.User)); // false
```

### **9. Enums vs Union Types**

\| Feature | `enum` | Union type (`"UP" | "DOWN"`) |
\|---------|--------|-------------------|
\| Runtime existence |  Yes |  No (type-only) |
\| Reverse mapping |  Yes (numeric) |  No |
\| Readability in debugging | Medium | High (with strings) |
\| Performance | `const enum` = high | High |

 **Key Takeaway**:
Use **`enum`** when:

- You need a fixed set of related constants.
- You want them to exist at runtime.
- You may need reverse mapping (numeric).

Use **union types** when:

- You only need them for compile-time type safety.
- You don’t need runtime objects.
