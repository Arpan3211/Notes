# Unknown


### What is `unknown` in TypeScript?

- `unknown` is a **type-safe counterpart of `any`**.
- It represents a value that we **don’t know the type of yet** at compile time.
- Unlike `any`, you **cannot directly use** a value of type `unknown` without first narrowing its type.

### Key Characteristics of `unknown`

| Feature                         | `any` | `unknown`              |
| ------------------------------- | ----- | ---------------------- |
| Assign any type to it           | Yes    | Yes                     |
| Assign it to another type       | Yes    | No (without narrowing) |
| Can perform operations directly | Yes    | No (must narrow first) |
| Type-safe                       | No    | Yes                     |

### Example

### Correct Usage with Type Narrowing

```ts
let value: unknown;

value = "Hello";
value = 123;
value = true;

//  Direct use will cause an error
// console.log(value.toUpperCase()); // Error: Object is of type 'unknown'

//  First check its type
if (typeof value === "string") {
  console.log(value.toUpperCase()); // SAFE
}

if (typeof value === "number") {
  console.log(value + 10); // SAFE
}
```

### Difference from `any`

```ts
let anything: any = "hello";
anything.toUpperCase(); // No error (but risky!)

let notSure: unknown = "hello";
// notSure.toUpperCase(); // Error (must check type first)
```

### Common Use Cases of `unknown`

1. **Handling dynamic data safely**
   Example: When parsing JSON, you don’t know its structure upfront.

   ```ts
   function parseData(json: string): unknown {
     return JSON.parse(json);
   }

   let data: unknown = parseData('{"name": "Arpan"}');

   if (typeof data === "object" && data !== null && "name" in data) {
     console.log((data as { name: string }).name);
   }
   ```

2. **Safer alternative to `any`**
   Use `unknown` when type is not known yet, but you still want TypeScript to **force checks**.

 **Summary:**

- Use `unknown` instead of `any` for **safer typing**.
- You must **narrow** the type before using it.
- Best for **dynamic, runtime-checked values** like JSON or external API data.
