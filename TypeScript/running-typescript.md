# Ways to run the Typescript code


---

#### **Install TypeScript globally**

Run:

```bash
npm install -g typescript
```

Then check:

```bash
tsc --version
```

You should see something like:

```
Version 5.x.x
```

---

#### **Or install locally (project-based)**

If you’re inside a project:

```bash
npm install typescript --save-dev
```

Now, you can run:

```bash
npx tsc --version
```

(`npx` will run the local `tsc` without adding it to PATH globally.)

---

#### **If still not recognized**

- Make sure **Node.js** is installed (check with `node -v` and `npm -v`).
- If you installed globally but still see the error, add npm’s global bin folder to your PATH:

  - On Windows:

    1. Run `npm root -g` — note the path.
    2. Add the corresponding `bin` folder to your PATH via **Environment Variables**.

---

 If you want to run TypeScript without setting up `tsc` at all, you can just:

```bash
npx ts-node file.ts
```

---

#### **1. Compile to JavaScript, then run**

This is the most common method.

```bash
# Compile
tsc file.ts

# Run with Node
node file.js
```

- Pros: Works anywhere Node.js runs.
- Cons: Requires a separate compile step.

---

#### **2. Run directly using `ts-node`**

`ts-node` combines **TypeScript compilation + Node execution** in one step.

```bash
npx ts-node file.ts
```

- Pros: No manual compile step.
- Cons: Slightly slower startup, not recommended for production.

---

#### **3. Run in the Browser**

- **With `<script type="module">` and bundler** like Vite, Webpack, Parcel, or esbuild.
- Example using Vite:

```bash
npm create vite@latest my-app -- --template react-ts
npm run dev
```

The bundler compiles TypeScript to JavaScript in the background.

---

#### **4. Run with `ts-node-dev`**

Automatically restarts when files change (good for development).

```bash
npx ts-node-dev file.ts
```

---

#### **5. Using Deno** (TypeScript built-in support)

Deno runs `.ts` files natively without extra setup.

```bash
deno run file.ts
```

---

#### **6. Using Bun** (TypeScript support without config)

```bash
bun run file.ts
```

---

#### **7. Inside Online Editors**

- **Playgrounds**:

  - [TypeScript Playground](https://www.typescriptlang.org/play)
  - StackBlitz, CodeSandbox

- Runs directly in the browser via in-memory compilation.

---

 **Quick Summary Table**

| Method            | Tool Needed  | Compile Step | Best For            |
| ----------------- | ------------ | ------------ | ------------------- |
| tsc + node        | Node.js, tsc | Manual       | Production-ready    |
| ts-node           | ts-node      | Automatic    | Quick scripts       |
| Browser bundler   | Vite/Webpack | Automatic    | Frontend apps       |
| ts-node-dev       | ts-node-dev  | Automatic    | Dev with hot reload |
| Deno              | Deno         | None         | Secure, modern apps |
| Bun               | Bun          | None         | Fast execution      |
| Online playground | Browser      | None         | Experimenting       |

---

---

### 1. **`boolean`**

### Meaning

Represents only **two possible values**: `true` or `false`.

### Syntax

```ts
let isActive: boolean = true;
let isCompleted: boolean = false;
```

### Notes

- **Literal boolean types**: You can also have types that are specifically `true` or `false` (useful for narrowing).

```ts
let flag: true = true; // Only 'true' allowed
```

- Commonly used for flags, toggles, and conditions.

### 2. **`string`**

### Meaning

Represents **textual data** (sequences of characters).

### Syntax

```ts
let firstName: string = "Arpan";
let greeting: string = `Hello, ${firstName}!`; // Template string
```

### Features

- **Template Literals**:

```ts
let age: number = 22;
let info: string = `Name: ${firstName}, Age: ${age}`;
```

- **String Literal Types**:

```ts
let direction: "left" | "right";
direction = "left"; // 
direction = "up"; //  Error
```

- Used for messages, labels, and identifiers.

---

### 3. **`number`**

### Meaning

Represents **all numeric values** (integers, floats, hex, binary, octal).

### Syntax

```ts
let count: number = 10;
let price: number = 99.99;
let hex: number = 0xff;
let binary: number = 0b1010;
let octal: number = 0o744;
```

### Notes

- JavaScript/TypeScript `number` is **always floating-point** (no separate `int` type).
- For **big integers**, use `bigint` type (e.g., `123n`).

### Quick Comparison Table

| Type      | Example Values                           | Special Features                             |
| --------- | ---------------------------------------- | -------------------------------------------- |
| `boolean` | `true`, `false`                          | Used for logical conditions                  |
| `string`  | `"hello"`, `'world'`, `` `Hi ${name}` `` | Supports template literals and literal types |
| `number`  | `42`, `3.14`, `0xff`, `0b1010`           | All numbers are 64-bit floating point        |
