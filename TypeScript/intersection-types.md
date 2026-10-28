# Intersection Types


### Intersection Types (`&`)

### Definition

- **Intersection types** combine **multiple types into one**.
- A value of an intersection type must **satisfy all included types simultaneously**.
- You use the **`&` operator** to define them.

 Think of it as **“AND”** between types (unlike Union `|` which is **“OR”**).

### Syntax

```ts
type Combined = TypeA & TypeB;
```

 `Combined` must have **all properties** of `TypeA` **and** `TypeB`.

### Example 1 – Basic Intersection

```ts
type Person = { name: string };
type Employee = { employeeId: number };

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Arpan",
  employeeId: 101,
};
```

 Here `Staff` must include both `name` (from `Person`) and `employeeId` (from `Employee`).

### Example 2 – Function Parameters

```ts
type Admin = { role: string };
type User = { username: string };

function printUser(user: User & Admin) {
  console.log(`${user.username} is an ${user.role}`);
}

printUser({ username: "Arpan", role: "Admin" }); //  Works
```

### Example 3 – With Interfaces

```ts
interface Drivable {
  drive(): void;
}

interface Flyable {
  fly(): void;
}

type FlyingCar = Drivable & Flyable;

const car: FlyingCar = {
  drive() {
    console.log("Driving...");
  },
  fly() {
    console.log("Flying...");
  },
};
```

 `FlyingCar` must implement **both** methods.

### Example 4 – Intersection with Union (Advanced)

```ts
type A = { a: string } | { b: string };
type B = { c: string };

type Result = A & B;

// Result becomes: ({ a: string; c: string }) | ({ b: string; c: string });
```

 Useful when combining complex types in **APIs or libraries**.

### Difference: Union vs Intersection

\| Feature | Union (`|`) | Intersection (`&`) |
\|---------------------------|-----------------------------------------------|-------------------------------------------|
\| Meaning | Either one type or the other (OR) | Must satisfy all types (AND) |
\| Example | `string | number` → string **or** number | `{name} & {id}` → must have both |
\| Usage | Flexible (input may vary) | Restrictive (object must combine all) |

### Key Interview Points

- Union (`|`) = **OR**, Intersection (`&`) = **AND**.
- Intersection creates **a single type with all properties combined**.
- Often used in **mixins**, **API responses**, and **class composition**.
- Be careful: too many intersections can make types **impossible** to satisfy.

 **One-line Interview Answer:**
“Intersection types in TypeScript combine multiple types into one using `&`, so a variable must include all properties of the intersected types.”
