# Template Literal Types


### **What are Template Literal Types?**

Template Literal Types in TypeScript allow you to build new **string literal types** by combining existing string literal types using **template string syntax** (similar to JavaScript template strings with backticks `` `...` ``).

They are **type-level string manipulation tools** introduced in TypeScript 4.1.

### **Basic Syntax**

```ts
type Greeting = `Hello, ${string}`;
```

Here, `Greeting` is any string starting with `"Hello, "` followed by any string.

### **Examples**

### 1. Simple Concatenation

```ts
type Role = "admin" | "user";
type Status = "active" | "inactive";

type UserRoleStatus = `${Role}-${Status}`;

// Equivalent to:
// "admin-active" | "admin-inactive" | "user-active" | "user-inactive"
```

 This generates all possible string combinations.

### 2. Enforcing String Patterns

```ts
type ID = `user_${number}`;

let id1: ID = "user_123"; //  valid
let id2: ID = "admin_456"; //  Error: not assignable to `user_${number}`
```

 Useful for structured identifiers (like `"order_123"`, `"invoice_456"`).

### 3. With Union + Template Literal

```ts
type Event = "click" | "scroll" | "mousemove";
type EventHandler = `on${Capitalize<Event>}`;

// Equivalent to: "onClick" | "onScroll" | "onMousemove"
```

Here we combined **template literal types** with the **Capitalize utility type**.

### 4. Dynamic API Endpoints

```ts
type Resource = "user" | "product";
type Endpoint = `/api/${Resource}`;

let url1: Endpoint = "/api/user"; // 
let url2: Endpoint = "/api/product"; // 
let url3: Endpoint = "/api/order"; //  Error
```

### **Why Use Template Literal Types?**

- Enforce **string patterns** at compile time.
- Prevent typos in API endpoints, event handlers, role names, etc.
- Combine with **utility types** (`Uppercase`, `Capitalize`, etc.) for flexible string transformations.

 **In short (Interview-ready)**:
Template Literal Types allow you to build **new string literal types** using template string syntax. They are powerful for enforcing **string patterns** and combining unions into all possible string combinations.
