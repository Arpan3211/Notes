# Type Guards / Narrowing - (instanceof, typeof, equality checks, truthiness, and type predicates)


### What are Type Guards?

- **Type Guards** are runtime checks that help **narrow down the type** of a variable within a specific block of code.
- They are used when working with **union types** or `any`/`unknown`.

Example:

```ts
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // here id is string
  } else {
    console.log(id.toFixed()); // here id is number
  }
}
```

 The `typeof` check narrowed `id`.

### Techniques for Type Guards

### 1. **`typeof` Operator**

- Used for **primitive types** (`string`, `number`, `boolean`, `symbol`, `bigint`, `undefined`, `object`, `function`).

```ts
function process(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // value is string
  } else {
    console.log(value.toFixed(2)); // value is number
  }
}
```

### 2. **`instanceof` Operator**

- Used for checking **class instances** (objects).

```ts
class Dog {
  bark() {
    console.log("Woof!");
  }
}
class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // narrowed to Dog
  } else {
    animal.meow(); // narrowed to Cat
  }
}
```

### 3. **Equality (==, ===) Narrowing**

- If two values are compared, TypeScript can infer a narrower type.

```ts
type Status = "loading" | "success" | "error";

function handleStatus(status: Status) {
  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("Success!");
  } else {
    console.log("Error!");
  }
}
```

### 4. **Truthiness Narrowing**

- TypeScript checks whether a value is "truthy" or "falsy".

```ts
function printLength(str?: string | null) {
  if (str) {
    console.log(str.length); // str is string
  } else {
    console.log("No string provided");
  }
}
```

### 5. **Type Predicates (`is`)**

- Create **custom type guards** using return type `param is Type`.

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim(); // narrowed to Fish
  } else {
    animal.fly(); // narrowed to Bird
  }
}
```

### Summary Table

| Technique        | Works On                              | Example                                 |
| ---------------- | ------------------------------------- | --------------------------------------- |
| `typeof`         | Primitives (`string`, `number`, etc.) | `typeof value === "string"`             |
| `instanceof`     | Classes / object instances            | `animal instanceof Dog`                 |
| Equality (`===`) | Literal types, unions                 | `status === "success"`                  |
| Truthiness       | `null`, `undefined`, falsy values     | `if (str) { ... }`                      |
| Type Predicates  | Custom user-defined narrowing         | `function isFish(x): x is Fish { ... }` |
