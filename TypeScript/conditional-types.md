# Conditional Types


### **Definition**

Conditional Types allow you to create types that depend on a **condition at the type level**.
They use the form:

```ts
T extends U ? X : Y
```

Meaning:

- If type `T` is assignable to type `U`, then the result is `X`
- Otherwise, the result is `Y`

### **Example 1 – Basic Conditional Type**

```ts
type IsString<T> = T extends string ? "Yes" : "No";

type A = IsString<string>; // "Yes"
type B = IsString<number>; // "No"
```

### **Example 2 – Narrowing Types**

```ts
type Animal = "dog" | "cat" | "fish";

type IsPet<T> = T extends "dog" | "cat" ? true : false;

type A = IsPet<"dog">; // true
type B = IsPet<"fish">; // false
```

### **Example 3 – Inferring with `infer` keyword**

The `infer` keyword allows us to **capture a type** inside a conditional type.

```ts
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type A = GetReturnType<() => number>; // number
type B = GetReturnType<(x: string) => void>; // void
type C = GetReturnType<string>; // never
```

### **Example 4 – Built-in Use Case**

Some **utility types** are built with conditional types.

```ts
// Exclude<T, U> = T extends U ? never : T
type Result = Exclude<"a" | "b" | "c", "a">;
// "b" | "c"

// Extract<T, U> = T extends U ? T : never
type Result2 = Extract<"a" | "b" | "c", "a" | "c">;
// "a" | "c"
```

### **Example 5 – Distributive Conditional Types**

When you use conditional types on **unions**, TypeScript distributes the condition across each member.

```ts
type ToArray<T> = T extends any ? T[] : never;

type A = ToArray<string | number>;
// string[] | number[]
```

### **Key Points for Interviews**

1. **Syntax**: `T extends U ? X : Y`
2. Conditional Types let types behave differently based on conditions.
3. They are often combined with **`infer`** for type inference.
4. Many **utility types (Exclude, Extract, ReturnType, InstanceType, Awaited)** are built using conditional types.
5. They support **distributive behavior** when working with unions.
