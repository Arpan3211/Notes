# Utility Types - (Partial, Pick, Omit, Readonly, Record, Excludev, Extract, Awaited, Parameters, Non Nullable, ReturnType, InstanceType)


Got it  Let’s go step by step. In TypeScript, **Utility Types** are built-in helper types that make it easier to transform or manipulate existing types.

I’ll explain each one with **definition + example** 

---

### 1. **`Partial<T>`**

- **Definition**: Makes **all properties of `T` optional**.
  The Partial type in TypeScript allows you to make all properties of a type optional. This is useful when you need to create an object with only a subset of the properties of an existing type.
- **Use Case**: Useful when updating objects partially.

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

// Using Partial
function updateUser(user: User, updates: Partial<User>): User {
  return { ...user, ...updates };
}

const updated = updateUser(
  { id: 1, name: "Arpan", email: "arpan@test.com" },
  { name: "Waddewar" } //  only updating name
);
```

---

### 2. **`Pick<T, K>`**

- **Definition**: Creates a new type by **picking specific properties** (`K`) from `T`.
  Pick constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type
- **Use Case**: Useful when you only want part of a type.

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

// Pick only id and name
type UserPreview = Pick<User, "id" | "name">;

const user: UserPreview = { id: 1, name: "Arpan" };
```

---

### 3. **`Omit<T, K>`**

- **Definition**: Creates a new type by **removing specific properties** (`K`) from `T`.
  Omit constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals).
- **Use Case**: Opposite of `Pick`.

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

// Omit email
type UserWithoutEmail = Omit<User, "email">;

const user: UserWithoutEmail = { id: 1, name: "Arpan" };
```

---

### 4. **`Readonly<T>`**

- **Definition**: Makes **all properties of `T` read-only** (immutable).
  Readonly constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.
- **Use Case**: To prevent accidental modifications.

```ts
interface User {
  id: number;
  name: string;
}

const user: Readonly<User> = { id: 1, name: "Arpan" };

user.name = "Waddewar"; //  Error: Cannot assign to 'name' because it is a read-only property.
```

---

### 5. **`Record<K, T>`**

- **Definition**: Constructs an object type with keys `K` and values `T`.
  Record constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.
- **Use Case**: Useful for mapping keys to values.

```ts
type Role = "admin" | "user" | "guest";

// Map roles to permissions
const permissions: Record<Role, string[]> = {
  admin: ["read", "write", "delete"],
  user: ["read", "write"],
  guest: ["read"],
};
```

---

### 6. **`Exclude<T, U>`**

- **Definition**: Excludes types from `T` that are assignable to `U`.
  Exclude constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.
- **Use Case**: Useful when you want to remove some types.

```ts
type Status = "success" | "error" | "loading";

// Remove "loading"
type NonLoadingStatus = Exclude<Status, "loading">;

let status: NonLoadingStatus = "success"; // 
status = "loading"; //  Error
```

---

### 7. **`Extract<T, U>`**

- **Definition**: Extracts types from `T` that are assignable to `U`.
  Extract constructs a type by extracting from Type all union members that are assignable to Union.
- **Use Case**: Opposite of `Exclude`.

```ts
type Status = "success" | "error" | "loading";

// Extract only "loading"
type LoadingStatus = Extract<Status, "loading">;

const s: LoadingStatus = "loading"; // 
```

---

### 8. **`Awaited<T>`**

- **Definition**: Gets the type that a Promise resolves to.
  This type is meant to model operations like await in async functions, or the .then() method on Promises - specifically, the way that they recursively unwrap Promises.
- **Use Case**: Helps when working with `async`/`await`.

```ts
type MyPromise = Promise<number>;

type ResolvedType = Awaited<MyPromise>; // number
```

---

### 9. **`Parameters<T>`**

- **Definition**: Extracts parameter types of a function as a tuple.
  Parameters constructs a tuple type from the types used in the parameters of a function type Type.
- **Use Case**: Useful for reusing function parameter types.

```ts
function greet(name: string, age: number) {
  return `Hello ${name}, age ${age}`;
}

type GreetParams = Parameters<typeof greet>; // [string, number]

const args: GreetParams = ["Arpan", 22];
greet(...args);
```

---

### 10. **`NonNullable<T>`**

- **Definition**: Removes `null` and `undefined` from `T`.
  Non-Nullable constructs a type by excluding null and undefined from Type.
- **Use Case**: Useful when you want to enforce non-null types.

```ts
type Name = string | null | undefined;

type NonNullName = NonNullable<Name>; // string
```

---

### 11. **`ReturnType<T>`**

- **Definition**: Extracts the return type of a function.
  Return type constructs a type consisting of the return type of function Type.
- **Use Case**: Useful for inferring return values.

```ts
function greet() {
  return { msg: "Hello Arpan" };
}

type GreetReturn = ReturnType<typeof greet>; // { msg: string }

const result: GreetReturn = { msg: "Hello Arpan" };
```

---

### 12. **`InstanceType<T>`**

- **Definition**: Extracts the instance type of a class.
  This type constructs a type consisting of the instance type of a constructor function in Type.
- **Use Case**: Useful for working with classes dynamically.

```ts
class User {
  constructor(public name: string, public age: number) {}
}

type UserInstance = InstanceType<typeof User>;

const arpan: UserInstance = new User("Arpan", 22);
```
