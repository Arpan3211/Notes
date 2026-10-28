# Undefined


### Meaning

`undefined` means:

> “This variable has been declared but hasn’t been assigned a value yet.”

It’s the **default value** for:

- Uninitialized variables.
- Missing object properties.
- Missing function arguments.

### Example

```ts
let age: number | undefined; // Not initialized → undefined
console.log(age); // undefined

function greet(name?: string) {
  // name is string | undefined
  console.log(`Hello, ${name}`);
}
greet(); // Hello, undefined
```

### **3. `null` vs `undefined` in TypeScript**

| Feature          | `null`                            | `undefined`                     |
| ---------------- | --------------------------------- | ------------------------------- |
| **Meaning** | Explicit "no value"               | Value is missing/unassigned     |
| **Set by** | Programmer                        | JavaScript engine by default    |
| **Common usage** | Clear/reset variable; DB "empty"  | Default for missing values      |
| **Type** | `null`                            | `undefined`                     |
| **Example** | `let val: string \| null = null;` | `let val: string \| undefined;` |

### **4. Interaction with `--strictNullChecks`**

By default (`--strictNullChecks` **off**), `null` and `undefined` are considered part of **all types**, which can lead to bugs.

With `--strictNullChecks` **on** (recommended):

- You must **explicitly include** `null` or `undefined` in the type if you want them allowed.

```ts
let name: string = null; //  Error (strict mode)
let name2: string | null = null; //  Allowed
```

### **5. Special Cases**

- **Loose equality (`==`)** treats them as equal:

```ts
null == undefined; // true
null === undefined; // false
```

- Function parameters:

```ts
function process(data: string | null | undefined) {}
```

- Default values often help avoid `undefined` issues:

```ts
function greet(name?: string) {
  console.log(`Hello, ${name ?? "Guest"}`);
}
```
