# Type Compatibility


### What is Type Compatibility?

**Type Compatibility** in TypeScript determines whether one type can be assigned to another.
 It follows a **structural typing system** (not nominal typing).
This means: **If two types have the same structure, they are considered compatible, even if their names are different.**

### Example 1: Basic Object Compatibility

```ts
interface Person {
  name: string;
  age: number;
}

interface Employee {
  name: string;
  age: number;
  salary: number;
}

let p: Person = { name: "Arpan", age: 22 };
let e: Employee = { name: "Raj", age: 25, salary: 50000 };

p = e; //  Compatible (Employee has all properties of Person)
e = p; //  Error (salary missing)
```

 Rule: **A type with more properties can be assigned to a type with fewer required properties, but not vice versa.**

### Example 2: Function Compatibility

TypeScript also checks **function parameter compatibility**:

```ts
let greet = (name: string) => console.log("Hi " + name);
let log = (msg: string, id: number) => console.log(msg, id);

greet = log; //  Error (log requires 2 params, greet only 1)
log = greet; //  OK (extra parameter ignored)
```

 Rule:

- **Fewer parameters → More compatible** (because extra args can be ignored).
- **Return types must also be compatible**.

### Example 3: Enums

Enums are compatible with numbers, but **not with each other**:

```ts
enum Status {
  Active,
  Inactive,
}
enum Color {
  Red,
  Blue,
}

let s: Status = Status.Active;
let n: number = s; //  Compatible (enum to number)
let c: Color = Color.Red;

// s = c;   Error (different enums not compatible)
```

### Example 4: Classes

Class compatibility is based on **instance members**, not names:

```ts
class A {
  x: number = 0;
}

class B {
  x: number = 0;
}

let a: A = new B(); //  Compatible (same structure)
```

### Example 5: `any` and `unknown`

- `any` is **compatible with everything**.
- `unknown` is **only assignable to itself or `any`**.

```ts
let x: any = 10;
let y: unknown = "hello";

x = y; //  (any accepts everything)
y = x; //  (unknown accepts any, but unsafe in usage)
```

### Interview One-Liner

“Type Compatibility in TypeScript is based on **structural typing**, meaning if two types have the same shape, they’re considered compatible. This applies to objects, functions, classes, enums, and more.”

---

---

# Combining Types
