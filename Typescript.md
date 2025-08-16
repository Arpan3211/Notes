## TypeScript vs JavaScript

TypeScript is a superset of JavaScript that adds optional type annotations and other features such as interfaces, classes, and namespaces. JavaScript is a dynamically-typed language that is primarily used for client-side web development and can also be used for server-side development.

### Key Differences

#### 1. Types

TypeScript has optional type annotations while JavaScript is dynamically-typed. This means that in TypeScript, you can specify the data type of variables, parameters, and return values, which can help catch type-related errors at compile-time.

#### 2. Syntax

TypeScript extends JavaScript syntax with features like interfaces, classes, and namespaces. This provides a more robust and organized structure for large-scale projects.

#### 3. Tooling

TypeScript has better tooling support, such as better editor integration, type checking, and code refactoring.

#### 4. Backwards Compatibility

TypeScript is fully compatible with existing JavaScript code, which means you can use TypeScript in any JavaScript environment.

---

---

## Type Checking JavaScript Files

Alright — let’s go **all-in** on **Type Checking JavaScript Files** and cover **every possible way to define types** when writing plain `.js` files.

This is for when you **want TypeScript’s safety but don’t want to fully switch to `.ts` yet**.

---

### **1. Enabling Type Checking in JS Files**

Before defining types, you need to **turn on checking**.

**Option 1 – Per project (`tsconfig.json`)**

```json
{
  "compilerOptions": {
    "allowJs": true, // TS can read .js files
    "checkJs": true, // Actually type-check them
    "noEmit": true // Don't output compiled JS
  },
  "include": ["src/**/*"]
}
```

**Option 2 – Per file**

```js
// @ts-check
```

Put this at the top of the `.js` file you want to check.

---

### **2. Defining Types in JavaScript Files**

In `.js` files, TypeScript understands types via **JSDoc comments**.
Here’s **every main way** you can define types.

---

#### **2.1 Basic Variable Types**

```js
// @ts-check

/** @type {string} */
let name = "Arpan";

/** @type {number} */
let age = 22;

/** @type {boolean} */
let isActive = true;
```

---

#### **2.2 Array Types**

```js
/** @type {number[]} */
let scores = [10, 20, 30];

/** @type {Array<string>} */
let fruits = ["apple", "banana"];
```

---

#### **2.3 Object Types**

```js
/** @type {{ name: string, age: number }} */
let user = { name: "Arpan", age: 22 };
```

- `?` marks optional:

```js
/** @type {{ name: string, age?: number }} */
let person = { name: "John" }; // age optional
```

- `readonly` in JS JSDoc:

```js
/** @type {{ readonly id: number }} */
let obj = { id: 1 };
```

---

#### **2.4 Functions**

```js
/**
 * @param {string} name
 * @param {number} age
 * @returns {string}
 */
function greet(name, age) {
  return `Hello ${name}, you are ${age} years old.`;
}
```

**Optional parameters**

```js
/**
 * @param {string} first
 * @param {string} [last]  // optional
 */
function printName(first, last) {}
```

**Default values**

```js
/**
 * @param {string} name
 * @param {number} [count=1]  // default value
 */
function repeatName(name, count = 1) {}
```

---

#### **2.5 Multiple Possible Types (Union Types)**

```js
/** @type {string | number} */
let id;
id = 101;
id = "admin";
```

---

#### **2.6 Tuples**

```js
/** @type {[string, number]} */
let pair = ["Arpan", 22];
```

---

#### **2.7 Type Aliases**

```js
/**
 * @typedef {Object} User
 * @property {string} name
 * @property {number} age
 */

/** @type {User} */
let u1 = { name: "Arpan", age: 22 };
```

---

#### **2.8 Generics**

```js
/**
 * @template T
 * @param {T[]} arr
 * @returns {T}
 */
function firstElement(arr) {
  return arr[0];
}

firstElement([1, 2, 3]); // number
firstElement(["a", "b"]); // string
```

---

#### **2.9 Importing Types from `.d.ts` Files**

If types are too complex, create a `.d.ts` declaration file:

```ts
// types.d.ts
type Product = { id: number; name: string; price: number };
```

Then in `.js`:

```js
/** @type {import("./types").Product} */
let p = { id: 1, name: "Book", price: 20 };
```

---

#### **2.10 Importing Types from Packages**

```js
/** @type {import("express").Request} */
function handler(req, res) {}
```

---

#### **2.11 Enums (via JSDoc)**

JS has no native enums, but you can simulate:

```js
/**
 * @enum {number}
 */
const Status = {
  SUCCESS: 1,
  ERROR: 2,
};

let currentStatus = Status.SUCCESS;
```

---

#### **2.12 `any` and `unknown`**

```js
/** @type {any} */ // disables type checking for this variable
let something;

/** @type {unknown} */ // must be checked before use
let maybe;
```

---

#### **2.13 Callback Function Types**

```js
/**
 * @param {number[]} arr
 * @param {(value: number) => void} callback
 */
function processArray(arr, callback) {
  arr.forEach(callback);
}
```

---

### **Cheat Sheet Table**

| Use Case             | JSDoc Syntax                                  |
| -------------------- | --------------------------------------------- |
| String               | `@type {string}`                              |
| Number               | `@type {number}`                              |
| Boolean              | `@type {boolean}`                             |
| Array                | `@type {string[]}` or `@type {Array<string>}` |
| Object               | `@type {{ name: string, age: number }}`       |
| Tuple                | `@type {[string, number]}`                    |
| Union                | `@type {string \| number}`                    |
| Optional Property    | `@type {{ name: string, age?: number }}`      |
| Readonly Property    | `@type {{ readonly id: number }}`             |
| Function             | `@param {type} name` & `@returns {type}`      |
| Optional Parameter   | `@param {string} [name]`                      |
| Default Parameter    | `@param {string} [name="default"]`            |
| Type Alias           | `@typedef {Object} Name`                      |
| Generics             | `@template T`                                 |
| Import Types         | `@type {import("./file").TypeName}`           |
| Import Package Types | `@type {import("express").Request}`           |
| Enum Simulation      | `@enum {number}`                              |
| Any / Unknown        | `@type {any}` / `@type {unknown}`             |
| Callback             | `@param {(param: type) => returnType} name`   |

---

---

## Install and Configure

To install and configure TypeScript in your project, you need to perform the following steps:

- Initialize npm in your project directory by running the following command:
  ```js
  npm init
  ```
- Install TypeScript as a project dependency by running the following command:
  ```js
  npm install --save-dev typescript
  ```
- Create a tsconfig.json file in your project directory to specify the compiler options for building your project. For example:

```js
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "exclude": ["node_modules"]

}
```

- Compile your TypeScript code using the following command:
  ```js
  npx tsc
  ```
  Note: You can also compile individual TypeScript files by specifying the file path after the tsc command. For example:

```js
npx tsc ./src/index.ts
```

---

---

## tsconfig.json

### **What is `tsconfig.json`?**

- It’s the configuration file for the TypeScript compiler (`tsc`).
- It tells TypeScript **what files to compile** and **how to compile them**.
- Without `tsconfig.json`, you must pass compiler options via CLI every time — which is tedious.
- Having one enables **Project Mode**, letting you run `tsc` without arguments.

---

### **Basic Structure**

```json
{
  "compilerOptions": {
    // compiler settings here
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"],
  "files": ["index.ts"]
}
```

---

### **Main Sections**

### **1. `compilerOptions`**

This is where **most of the magic happens** — it controls TypeScript’s behavior.

---

### **A. Output Control**

These decide **where compiled JS files go** and **how they look**.

| Option           | Purpose                                                                      | Example                         |
| ---------------- | ---------------------------------------------------------------------------- | ------------------------------- |
| `outDir`         | Where compiled JS is placed                                                  | `"outDir": "./dist"`            |
| `rootDir`        | The root folder of TS source files                                           | `"rootDir": "./src"`            |
| `outFile`        | Bundle output into a single file (only works with `module: system` or `amd`) | `"outFile": "./dist/bundle.js"` |
| `removeComments` | Remove comments in compiled JS                                               | `true`                          |
| `noEmit`         | Type-check only, don’t output JS                                             | `true`                          |
| `noEmitOnError`  | Stop emitting if there are errors                                            | `true`                          |

---

### **B. Module & Target Settings**

Control **which JS version** and **module system** is used.

| Option                         | Purpose                                                     | Example                                    |
| ------------------------------ | ----------------------------------------------------------- | ------------------------------------------ |
| `target`                       | JS version output                                           | `"ES5"`, `"ES6"`, `"ES2020"`, `"ESNext"`   |
| `module`                       | Module system                                               | `"CommonJS"`, `"ESNext"`, `"AMD"`, `"UMD"` |
| `moduleResolution`             | How modules are resolved                                    | `"node"` or `"classic"`                    |
| `lib`                          | Standard library features to include                        | `["ES2020", "DOM"]`                        |
| `types`                        | Which type definitions to include                           | `["node", "jest"]`                         |
| `typeRoots`                    | Where to find type declarations                             | `["./types"]`                              |
| `allowSyntheticDefaultImports` | Allow default imports from modules without a default export | `true`                                     |
| `esModuleInterop`              | Makes CommonJS imports work like ES modules                 | `true`                                     |
| `resolveJsonModule`            | Allows importing `.json` files                              | `true`                                     |

---

### **C. Type Checking Options**

These are the **safety settings**.

| Option                       | Purpose                                               | Example |
| ---------------------------- | ----------------------------------------------------- | ------- |
| `strict`                     | Turns on **all strict mode checks**                   | `true`  |
| `noImplicitAny`              | Disallow `any` when type is not inferred              | `true`  |
| `strictNullChecks`           | Forces you to check for `null`/`undefined`            | `true`  |
| `strictFunctionTypes`        | Prevents assigning functions with incompatible params | `true`  |
| `strictBindCallApply`        | Checks bind/call/apply usage                          | `true`  |
| `alwaysStrict`               | Ensures `"use strict"` in JS output                   | `true`  |
| `noImplicitThis`             | Prevents `this` being implicitly `any`                | `true`  |
| `useUnknownInCatchVariables` | Catch variables have `unknown` type instead of `any`  | `true`  |

---

### **D. JavaScript Interop**

If you mix `.js` and `.ts`.

| Option                 | Purpose                                      | Example |
| ---------------------- | -------------------------------------------- | ------- |
| `allowJs`              | Let `.js` files be compiled                  | `true`  |
| `checkJs`              | Type-check `.js` files                       | `true`  |
| `maxNodeModuleJsDepth` | How deep in `node_modules` to check JS files | `2`     |

---

### **E. Project Structure**

Tell TS **what files belong to the project**.

| Option            | Purpose                                            | Example            |
| ----------------- | -------------------------------------------------- | ------------------ |
| `composite`       | Required for **project references**                | `true`             |
| `declaration`     | Generate `.d.ts` type definition files             | `true`             |
| `declarationMap`  | Source maps for `.d.ts` files                      | `true`             |
| `sourceMap`       | Generate `.map` files for debugging                | `true`             |
| `incremental`     | Enable incremental builds                          | `true`             |
| `tsBuildInfoFile` | Location for incremental build cache               | `"./.tsbuildinfo"` |
| `skipLibCheck`    | Skip type checking `.d.ts` files for faster builds | `true`             |

---

### **F. JSX & React**

For React projects.

| Option               | Purpose                  | Example                                |
| -------------------- | ------------------------ | -------------------------------------- |
| `jsx`                | JSX handling             | `"react"`, `"react-jsx"`, `"preserve"` |
| `jsxFactory`         | Custom JSX function name | `"h"`                                  |
| `jsxFragmentFactory` | Custom JSX fragment name | `"Fragment"`                           |

---

---

#### **2. `include`**

- Array of glob patterns specifying **which files to compile**.

```json
"include": ["src/**/*", "tests/**/*.ts"]
```

---

#### **3. `exclude`**

- Files/folders to ignore.

```json
"exclude": ["node_modules", "dist"]
```

---

#### **4. `files`**

- Exact file list to compile (overrides `include`).

```json
"files": ["src/index.ts", "src/app.ts"]
```

---

#### **Best Practice Presets**

For a **React + Node mixed project**, a good starting point is:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "CommonJS",
    "lib": ["DOM", "ESNext"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "allowJs": true,
    "checkJs": false,
    "noEmit": false,
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

---

#### **1. React-based Project Example**

**Goal:** Modern React app with JSX, strict typing, source maps for debugging, and full editor support.

**`tsconfig.json`**

```json
{
  "compilerOptions": {
    /* Output & Structure */
    "target": "ESNext", // Latest JS features
    "module": "ESNext", // For ES module imports
    "lib": ["DOM", "ESNext"], // Include DOM & latest JS APIs
    "outDir": "./dist", // Compiled output folder
    "rootDir": "./src", // Root folder for source files

    /* React Specific */
    "jsx": "react-jsx", // Use new JSX transform (React 17+)
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,

    /* Type Checking */
    "strict": true, // Enable all strict checks
    "noImplicitAny": true, // No implicit `any`
    "strictNullChecks": true, // Must check for null/undefined
    "forceConsistentCasingInFileNames": true, // Avoid file path case issues

    /* Debugging & Build Performance */
    "sourceMap": true, // Generate source maps for debugging
    "skipLibCheck": true, // Skip type checking .d.ts files for speed
    "incremental": true // Faster builds
  },
  "include": ["src/**/*"], // All TS/TSX files in src
  "exclude": ["node_modules", "dist"] // Ignore node_modules & build output
}
```

**Example Project Structure:**

```
my-react-app/
 ├── src/
 │    ├── App.tsx
 │    ├── index.tsx
 │    └── components/
 │         └── Button.tsx
 ├── tsconfig.json
 ├── package.json
 └── node_modules/
```

---

#### **2. Normal JS Files + Type Checking Example**

**Goal:** Pure JavaScript project with JSDoc-based type checking. Useful for gradual migration from JS → TS.

**`tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2020", // Modern JS output
    "module": "CommonJS", // For Node.js environment
    "checkJs": true, // Enable type checking for JS files
    "allowJs": true, // Allow JS files in compilation
    "outDir": "./dist", // Compiled output
    "rootDir": "./src", // Root source folder
    "strict": true, // Enable all strict checks
    "noEmitOnError": true, // Don’t emit files if errors
    "esModuleInterop": true, // For importing CommonJS modules
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

**Example JS File with Type Checking (`src/math.js`):**

```js
// @ts-check

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

console.log(add(5, 10)); // ✅ Works
console.log(add("5", 10)); // ❌ Type error in editor
```

**Project Structure:**

```
my-js-project/
 ├── src/
 │    └── math.js
 ├── tsconfig.json
 ├── package.json
 └── node_modules/
```

---

---

## ts-node

### **What is ts-node?**

`ts-node` is a tool that allows you to run TypeScript files **directly** without compiling them into JavaScript first.
It works by internally using the TypeScript compiler (`tsc`) and then executing the compiled JavaScript code in Node.js.

You typically use `ts-node`:

- For **quick scripts** in TypeScript.
- For **development environments** (e.g., running dev servers, CLI tools).
- To avoid manual `tsc && node file.js` steps.

---

### **How to Install ts-node**

```bash
npm install -g ts-node typescript
```

OR (if you want it locally for a project)

```bash
npm install --save-dev ts-node typescript
```

---

### **Running a Normal TypeScript File with ts-node (No Project)**

Let’s say you have a file named **hello.ts**:

```ts
// hello.ts
const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

console.log(greet("Arpan"));
```

### **Run it directly with ts-node:**

```bash
ts-node hello.ts
```

✅ Output:

```
Hello, Arpan!
```

---

### **Without a tsconfig.json**

If you run `ts-node` without a `tsconfig.json`, it uses **default TypeScript settings**.
But if your code uses certain features (like ES modules), you might need to explicitly tell ts-node how to run it:

Example:

```bash
ts-node --compiler-options '{"module":"CommonJS"}' hello.ts
```

---

### **When Using ES Modules**

If your file is using ES Modules syntax (`import`/`export`), you might run into:

```
SyntaxError: Cannot use import statement outside a module
```

Fix:

```bash
ts-node --esm hello.ts
```

---

#### **Quick Recap:**

1. **Install** `ts-node` + `typescript`.
2. Write a `.ts` file.
3. Run with:

   ```bash
   ts-node file.ts
   ```

4. Optional flags:

   - `--esm` → If using ES Modules.
   - `--compiler-options` → Override TypeScript compiler settings.

---

---

## Ways to run the Typescript code

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

💡 If you want to run TypeScript without setting up `tsc` at all, you can just:

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

✅ **Quick Summary Table**

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
direction = "left"; // ✅
direction = "up"; // ❌ Error
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

---

---

## **void**

In **TypeScript**, `void` is a special type that means:

> “This function or expression does not return any useful value.”

It’s most commonly used as the **return type** of functions that don’t return anything.

### 1. **Basic Usage**

When a function doesn’t explicitly return a value, its return type is `void`:

```ts
function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello, TypeScript!");
```

Here:

- `console.log` has no return value (technically returns `undefined`).
- TypeScript enforces that you **don’t accidentally return** a value when `void` is the declared return type.

### 2. **`void` vs `undefined`**

- `void` means _“nothing returned”_, but technically in JavaScript, functions that return nothing actually return `undefined`.
- The difference is in **intent**:

  - `void` → semantic hint: “don’t use return value”.
  - `undefined` → explicit type meaning the value is literally `undefined`.

Example:

```ts
function doSomething(): void {
  return undefined; // ✅ allowed
  // return 5; ❌ Error
}

let value: undefined = undefined; // fine
```

### 3. **When `void` is useful**

- **Function signatures** where the callback’s result should be ignored:

```ts
type VoidCallback = () => void;

function runCallback(cb: VoidCallback) {
  cb();
}

runCallback(() => console.log("Done!"));
```

- **Event listeners**:

```ts
document.addEventListener("click", (event): void => {
  console.log("Clicked", event);
});
```

### 4. **Special Case: `void` in expressions**

When you write `void <expression>`, it **evaluates the expression but discards the value**:

```ts
void console.log("This will print, but return value is ignored");
```

This is sometimes used to:

- Ignore a promise result intentionally:

```ts
void asyncFunction();
```

- Avoid unhandled promise lint warnings.

### 5. **Key Takeaways**

- `void` is a type, not a keyword for “empty” like in C/C++.
- Primarily used for **functions that don’t return anything**.
- Tells TypeScript: “Ignore the return value; not meant for use.”
- Different from `undefined` in _meaning_, though both often end up being `undefined` in runtime.

**`void`**, **`null`**, **`undefined`**, and **`never`** in TypeScript:

| Type            | Meaning                                                                                             | When to Use                                                               | Can Hold Value?                                              | Example                                                    | Common Use Case                                                |
| --------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------- | -------------------------------------------------------------- |
| **`void`**      | Indicates a function **does not return any useful value** (usually returns `undefined` internally). | Function return type when result is irrelevant.                           | Only `undefined` (or `null` if `--strictNullChecks` is off). | `ts function log(): void { console.log("Hello"); } `       | Callback/event handler return types, ignoring Promise results. |
| **`null`**      | Intentional absence of any object value.                                                            | Represent “no value” explicitly.                                          | Only `null`.                                                 | `ts let data: null = null; `                               | Database results, optional config values.                      |
| **`undefined`** | A variable has been declared but not assigned a value (default in JS).                              | Represent “value not assigned yet”.                                       | Only `undefined`.                                            | `ts let value: undefined = undefined; `                    | Optional parameters, default uninitialized variables.          |
| **`never`**     | Represents a value that **can never exist**.                                                        | For functions that **never return** (e.g., throw error or infinite loop). | No value can be assigned.                                    | `ts function fail(): never { throw new Error("Error"); } ` | Exhaustive checks in `switch`, error throwing functions.       |

### **Quick Mnemonics**

- **`void`** → “Don’t expect a return.”
- **`null`** → “I put nothing here, on purpose.”
- **`undefined`** → “Nothing here… yet.”
- **`never`** → “This will never happen.”

---

---

## **`null`**

### Meaning

`null` is an **intentional absence** of any value.
It’s like saying:

> “This variable is empty on purpose.”

### Example

```ts
let user: string | null = null; // Explicitly no value
user = "Arpan"; // ✅ Can assign later
```

### Use Cases

- Explicitly clearing a variable.
- Representing "no object" or "empty" in APIs/DB results.

```ts
function findUser(id: number): string | null {
  return id === 1 ? "Arpan" : null;
}
```

---

## **`undefined`**

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
| **Meaning**      | Explicit "no value"               | Value is missing/unassigned     |
| **Set by**       | Programmer                        | JavaScript engine by default    |
| **Common usage** | Clear/reset variable; DB "empty"  | Default for missing values      |
| **Type**         | `null`                            | `undefined`                     |
| **Example**      | `let val: string \| null = null;` | `let val: string \| undefined;` |

### **4. Interaction with `--strictNullChecks`**

By default (`--strictNullChecks` **off**), `null` and `undefined` are considered part of **all types**, which can lead to bugs.

With `--strictNullChecks` **on** (recommended):

- You must **explicitly include** `null` or `undefined` in the type if you want them allowed.

```ts
let name: string = null; // ❌ Error (strict mode)
let name2: string | null = null; // ✅ Allowed
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

---

---

## **`interface`**

### **1. What is an Interface?**

In TypeScript, an **interface** is a way to define the **shape** (structure) of an object.
It tells the compiler:

> “Any object of this type must have these properties/methods with these types.”

It’s **only for type-checking** at compile time — it disappears in JavaScript after compilation.

### **2. Basic Example**

```ts
interface User {
  id: number;
  name: string;
  isAdmin: boolean;
}

const user1: User = {
  id: 1,
  name: "Arpan",
  isAdmin: true,
};
```

Here:

- `User` says any object of type `User` **must** have `id`, `name`, and `isAdmin` with specified types.
- Missing or extra properties (not allowed unless using index signatures) cause compile-time errors.

### **3. Optional Properties**

Add `?` if a property may or may not exist.

```ts
interface User {
  id: number;
  name: string;
  email?: string; // Optional
}

const user2: User = { id: 2, name: "John" }; // ✅ email not required
```

### **4. Readonly Properties**

Prevent modification after initialization.

```ts
interface Config {
  readonly apiKey: string;
}

const config: Config = { apiKey: "123abc" };
// config.apiKey = "456def"; ❌ Error
```

### **5. Methods in Interfaces**

Interfaces can define function signatures.

```ts
interface Person {
  name: string;
  greet(message: string): void;
}

const person1: Person = {
  name: "Arpan",
  greet(msg) {
    console.log(`${msg}, I'm ${this.name}`);
  },
};
```

### **6. Function Type Interfaces**

An interface can describe a callable function’s signature.

```ts
interface Add {
  (a: number, b: number): number;
}

const addNumbers: Add = (x, y) => x + y;
```

### **7. Extending Interfaces**

One interface can **inherit** from another.

```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = { name: "Buddy", breed: "Labrador" };
```

- Supports **multiple inheritance**:

```ts
interface A {
  a: string;
}
interface B {
  b: number;
}
interface C extends A, B {}
```

### **8. Index Signatures**

For objects with dynamic property names.

```ts
interface Dictionary {
  [key: string]: string;
}

const colors: Dictionary = {
  red: "#ff0000",
  green: "#00ff00",
};
```

### **9. Interfaces vs. Types**

| Feature              | Interface        | Type Alias (`type`)                        |
| -------------------- | ---------------- | ------------------------------------------ |
| Extendable later     | ✅ Yes           | ❌ No (but can combine with intersections) |
| Multiple inheritance | ✅ Yes           | ✅ Yes (via intersections)                 |
| Can describe unions  | ❌ No            | ✅ Yes                                     |
| Best for             | Objects, classes | Anything (objects, unions, primitives)     |

### **10. Interfaces with Classes**

Interfaces are often used for **class contracts**.

```ts
interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {}
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
```

If `Circle` misses `getArea`, TypeScript will throw an error.

### **Key Takeaways**

- **Purpose**: Defines object/class shape for type-checking.
- Supports **optional**, **readonly**, **methods**, and **index signatures**.
- Extensible — great for designing APIs and contracts.
- Disappears at runtime (only compile-time construct).

---

---

## **`Class`**

### **1. What is a Class in TypeScript?**

A **class** in TypeScript is a blueprint for creating objects that bundle:

- **Properties** (data/state)
- **Methods** (behavior)

It works like JavaScript’s ES6 classes, but **with type safety** and **extra features**.

### **2. Basic Example**

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

const arpan = new Person("Arpan", 22);
arpan.greet();
```

Here:

- `constructor` runs when a new object is created.
- `this` refers to the current instance.
- TypeScript enforces that `name` is a `string` and `age` is a `number`.

### **3. Access Modifiers**

TypeScript has **3 main access modifiers** for encapsulation:

| Modifier           | Scope                                       |
| ------------------ | ------------------------------------------- |
| `public` (default) | Accessible everywhere.                      |
| `private`          | Accessible only inside the same class.      |
| `protected`        | Accessible inside the class and subclasses. |

Example:

```ts
class Employee {
  public name: string; // Default
  private salary: number;
  protected department: string;

  constructor(name: string, salary: number, department: string) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }
}
```

### **4. Parameter Properties** (Shortcut)

Instead of writing properties separately, you can declare and assign them in the constructor:

```ts
class Product {
  constructor(public name: string, private price: number) {}
}
```

### **5. Readonly Properties**

Values that can only be set once (at declaration or in constructor).

```ts
class Config {
  readonly apiKey: string;
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }
}
```

### **6. Inheritance**

A class can **extend** another to reuse code.

```ts
class Animal {
  move() {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.move(); // From Animal
dog.bark(); // From Dog
```

### **7. Method Overriding**

Subclasses can replace a parent’s method:

```ts
class Parent {
  greet() {
    console.log("Hello from Parent");
  }
}

class Child extends Parent {
  greet() {
    console.log("Hello from Child");
  }
}
```

### **8. `super` Keyword**

Used to call parent class constructor or methods.

```ts
class Vehicle {
  constructor(public brand: string) {}
}

class Car extends Vehicle {
  constructor(brand: string, public model: string) {
    super(brand); // Call Vehicle's constructor
  }
}
```

### **9. Getters and Setters**

Control property access.

```ts
class User {
  private _password: string = "";

  get password(): string {
    return "****"; // Masked
  }

  set password(newPassword: string) {
    if (newPassword.length >= 6) {
      this._password = newPassword;
    }
  }
}
```

### **10. Static Members**

Belong to the class itself, not instances.

```ts
class MathUtils {
  static PI = 3.14;
  static add(a: number, b: number) {
    return a + b;
  }
}

console.log(MathUtils.PI);
console.log(MathUtils.add(2, 3));
```

### **11. Abstract Classes**

Used as blueprints that cannot be instantiated directly.

```ts
abstract class Shape {
  abstract getArea(): number; // Must be implemented
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}
```

### **Key Takeaways**

- Classes in TypeScript are **ES6 classes + type safety**.
- Support **access modifiers**, **readonly**, **get/set**, **static**, **abstract**.
- Great for **OOP** patterns and large-scale application architecture.

---

---

## **`enum`**

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
\| Runtime existence | ✅ Yes | ❌ No (type-only) |
\| Reverse mapping | ✅ Yes (numeric) | ❌ No |
\| Readability in debugging | Medium | High (with strings) |
\| Performance | `const enum` = high | High |

✅ **Key Takeaway**:
Use **`enum`** when:

- You need a fixed set of related constants.
- You want them to exist at runtime.
- You may need reverse mapping (numeric).

Use **union types** when:

- You only need them for compile-time type safety.
- You don’t need runtime objects.

---

---

## **`Arrays`**

### **1. What is an Array?**

An **array** in TypeScript is a data structure used to store **multiple values of the same type** in an ordered collection.

Unlike plain JavaScript, TypeScript enforces **type safety** for array elements.

### **2. Declaring Arrays**

You can declare arrays in two ways:

### **(a) Using `type[]` syntax**

```ts
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Arpan", "John", "Sara"];
```

### **(b) Using `Array<type>` syntax**

```ts
let numbers: Array<number> = [1, 2, 3, 4];
let names: Array<string> = ["Arpan", "John", "Sara"];
```

Both are equivalent — which one you use is personal preference.

### **3. Mixed / Union Type Arrays**

You can allow multiple types:

```ts
let mixed: (string | number)[] = ["Hello", 42, "World"];
```

### **4. Readonly Arrays**

Prevents modification of elements.

```ts
let arr: readonly number[] = [10, 20, 30];
// arr.push(40); ❌ Error
```

Or using `ReadonlyArray<T>`:

```ts
let arr: ReadonlyArray<string> = ["a", "b"];
```

### **5. Array Methods (Type-Safe)**

TypeScript knows what type of values are inside, so methods are type-safe:

```ts
let numbers: number[] = [1, 2, 3];

numbers.push(4); // ✅ OK
// numbers.push("hi"); // ❌ Error (must be number)

let doubled = numbers.map((num) => num * 2); // number[]
```

### **6. Tuple (Special Array)**

Tuples are fixed-length arrays with defined types at each index.

```ts
let person: [string, number] = ["Arpan", 22];
// person[0] must be string, person[1] must be number
```

Useful when you want **exact structure** (like database rows, key-value pairs).

### **7. Multi-dimensional Arrays**

You can define arrays of arrays:

```ts
let matrix: number[][] = [
  [1, 2],
  [3, 4],
];
```

### **8. Spread & Rest with Arrays**

```ts
let arr1: number[] = [1, 2];
let arr2: number[] = [...arr1, 3, 4]; // Spread

function sum(...nums: number[]) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```

### **9. Arrays with Interfaces & Types**

```ts
interface User {
  id: number;
  name: string;
}

let users: User[] = [
  { id: 1, name: "Arpan" },
  { id: 2, name: "John" },
];
```

### **10. Key Takeaways**

- Arrays in TypeScript are **typed** — ensures no accidental wrong elements.
- You can use `type[]` or `Array<type>` syntax.
- Supports **readonly**, **union arrays**, **tuples**, **multi-dimensional arrays**.
- Methods like `map`, `filter`, `reduce` are type-aware.

---

---

## **`Tuple`**

### **1. What is a Tuple?**

A **tuple** is an array with:

- A **fixed length**
- A **specific type for each element**

> Think of it as: _“An array with a strict structure.”_

### **2. Basic Example**

```ts
let person: [string, number] = ["Arpan", 22];

// person[0] → must be string
// person[1] → must be number
```

If you try to swap:

```ts
// person = [22, "Arpan"]; ❌ Error
```

### **3. Tuple vs Array**

| Feature | Array             | Tuple                             |
| ------- | ----------------- | --------------------------------- |
| Length  | Flexible          | Fixed (unless defined with `...`) |
| Types   | All elements same | Each element has its own type     |
| Example | `number[]`        | `[string, number]`                |

### **4. Optional Elements in Tuples**

You can make some positions optional:

```ts
let user: [string, number?];
user = ["Arpan"]; // ✅ Allowed
user = ["Arpan", 22]; // ✅ Allowed
```

### **5. Rest Elements in Tuples**

Useful for variable-length tuples.

```ts
let fruits: [string, ...string[]];
fruits = ["apple"];
fruits = ["apple", "banana", "cherry"];
```

### **6. Readonly Tuples**

Prevents modifying tuple values.

```ts
let point: readonly [number, number] = [10, 20];
// point[0] = 30; ❌ Error
```

### **7. Destructuring Tuples**

You can unpack tuple values easily.

```ts
let person: [string, number] = ["Arpan", 22];
let [name, age] = person;

console.log(name); // "Arpan"
console.log(age); // 22
```

### **8. Practical Use Cases**

- **Function return multiple values**:

```ts
function getUser(): [string, number] {
  return ["Arpan", 22];
}

const [name, age] = getUser();
```

- **Key-value pairs**:

```ts
let entry: [string, number] = ["age", 22];
```

- **Database row representation**:

```ts
type Row = [id: number, name: string, active: boolean];
const userRow: Row = [1, "Arpan", true];
```

### **9. Limitations**

- Tuples are stricter than arrays — you **cannot** push new values beyond their defined structure unless you use `...rest`.
- For flexible arrays, use `type[]` instead.

### ✅ Key Takeaways

- A **tuple** is a **fixed-size, ordered collection** with types known at each index.
- Supports **optional elements**, **rest elements**, **readonly tuples**, and **destructuring**.
- Best when you want to enforce a **structured set of values**.

---

---

## Object Types in TypeScript

### **1. What is an Object Type?**

In TypeScript, an **object type** describes the **shape** of an object:

- What **properties** it has.
- What **types** those properties are.
- What **methods** it may contain.

Example:

```ts
let user: { id: number; name: string; isAdmin: boolean } = {
  id: 1,
  name: "Arpan",
  isAdmin: true,
};
```

Here:

- `id` → must be `number`
- `name` → must be `string`
- `isAdmin` → must be `boolean`

### **2. Optional Properties**

Use `?` when a property may or may not exist.

```ts
let user: { id: number; name: string; email?: string } = {
  id: 1,
  name: "Arpan",
};
```

### **3. Readonly Properties**

Prevents changing values once assigned.

```ts
let config: { readonly apiKey: string } = { apiKey: "123" };
// config.apiKey = "456"; ❌ Error
```

### **4. Object Methods**

Object types can include function signatures.

```ts
let person: {
  name: string;
  greet: (msg: string) => void;
} = {
  name: "Arpan",
  greet: (msg: string) => console.log(`${msg}, I'm ${person.name}`),
};
```

### **5. Index Signatures**

When you don’t know all property names in advance:

```ts
let dictionary: { [key: string]: string } = {
  red: "#ff0000",
  green: "#00ff00",
};
```

- Key must be `string`
- Value must be `string`

### **6. Nested Object Types**

Objects can contain other objects:

```ts
let employee: {
  id: number;
  name: string;
  address: {
    city: string;
    zip: number;
  };
} = {
  id: 1,
  name: "Arpan",
  address: {
    city: "Nagpur",
    zip: 440001,
  },
};
```

### **7. Type Aliases for Objects**

Instead of repeating the same object type, create a `type`:

```ts
type User = {
  id: number;
  name: string;
  isAdmin?: boolean;
};

let user1: User = { id: 1, name: "Arpan" };
let user2: User = { id: 2, name: "John", isAdmin: true };
```

### **8. Interfaces for Objects**

Another way (like `type`, but extendable):

```ts
interface User {
  id: number;
  name: string;
}

let user: User = { id: 1, name: "Arpan" };
```

### **9. Intersection Types (Combine Objects)**

```ts
type Address = { city: string; zip: number };
type Employee = { id: number; name: string } & Address;

let emp: Employee = {
  id: 1,
  name: "Arpan",
  city: "Nagpur",
  zip: 440001,
};
```

### \*\*10. `object` vs `{}` vs `Object`

- `object` → any non-primitive value (`{}`, arrays, functions, etc.).
- `{}` → any value except `null` and `undefined`.
- `Object` → the JS global `Object` type (very loose).

Example:

```ts
let a: object; // any non-primitive
let b: {}; // any value except null/undefined
let c: Object; // very broad, includes primitives wrapped as objects
```

### ✅ Key Takeaways

- Object types define the **shape** of objects.
- Support **optional**, **readonly**, **methods**, **nested objects**, and **index signatures**.
- Use **type aliases** or **interfaces** for reusable shapes.
- Difference between `object`, `{}`, and `Object` is subtle but important.

---

---

## Unknown

### 🔹 What is `unknown` in TypeScript?

- `unknown` is a **type-safe counterpart of `any`**.
- It represents a value that we **don’t know the type of yet** at compile time.
- Unlike `any`, you **cannot directly use** a value of type `unknown` without first narrowing its type.

### 🔹 Key Characteristics of `unknown`

| Feature                         | `any` | `unknown`              |
| ------------------------------- | ----- | ---------------------- |
| Assign any type to it           | ✅    | ✅                     |
| Assign it to another type       | ✅    | ❌ (without narrowing) |
| Can perform operations directly | ✅    | ❌ (must narrow first) |
| Type-safe                       | ❌    | ✅                     |

### 🔹 Example

### ✅ Correct Usage with Type Narrowing

```ts
let value: unknown;

value = "Hello";
value = 123;
value = true;

// ❌ Direct use will cause an error
// console.log(value.toUpperCase()); // Error: Object is of type 'unknown'

// ✅ First check its type
if (typeof value === "string") {
  console.log(value.toUpperCase()); // SAFE
}

if (typeof value === "number") {
  console.log(value + 10); // SAFE
}
```

### ❌ Difference from `any`

```ts
let anything: any = "hello";
anything.toUpperCase(); // No error (but risky!)

let notSure: unknown = "hello";
// notSure.toUpperCase(); // Error (must check type first)
```

### 🔹 Common Use Cases of `unknown`

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

✅ **Summary:**

- Use `unknown` instead of `any` for **safer typing**.
- You must **narrow** the type before using it.
- Best for **dynamic, runtime-checked values** like JSON or external API data.

---

---

## Any

### 🔹 `any` in TypeScript (Interview Answer)

- `any` is a **TypeScript type** that disables type checking for a variable.
- When you use `any`, the variable can hold **any kind of value** (string, number, object, etc.), and you can perform **any operation** on it.
- It’s basically an **escape hatch** back to plain JavaScript.
- ⚠️ Downside: Using `any` removes type safety, so errors may only appear at runtime.

### ✅ Example:

```ts
let value: any = "Hello";
value = 42; // OK
value = true; // OK
console.log(value.toUpperCase()); // No error, but might crash if not a string
```

### 🔹 When to use `any`:

- Migrating legacy JavaScript code to TypeScript.
- When you’re not sure of the type yet, but you plan to refine it later.
- Avoid overusing it; prefer **`unknown`** or proper typing instead.

👉 **One-line Interview Answer:**
“`any` is a type in TypeScript that disables type checking and allows a variable to hold any value. It’s useful for quick prototyping or legacy migration but should be avoided in favor of safer types like `unknown`.”

---

---

## Never

### 🔹 `never` in TypeScript

- `never` represents **values that never occur**.
- A function or expression with type `never` **never successfully returns** — it either **throws an error** or **loops forever**.
- It’s the **opposite of `any`**: while `any` means _"can be anything"_, `never` means _"cannot be anything"_.

### ✅ Example 1: Function that always throws

```ts
function throwError(message: string): never {
  throw new Error(message); // function never reaches the end
}
```

### ✅ Example 2: Infinite loop

```ts
function infiniteLoop(): never {
  while (true) {
    // runs forever, never returns
  }
}
```

### ✅ Example 3: Exhaustiveness checking

```ts
type Shape = "circle" | "square";

function getArea(shape: Shape): number {
  switch (shape) {
    case "circle":
      return 3.14;
    case "square":
      return 4;
    default:
      // Ensures all cases are handled
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
```

👉 Here, if we later add `"triangle"` to `Shape` but forget to handle it in the switch, TypeScript will throw an error.

### 🔹 Key Interview Points

- `never` is used for **impossible states**, **error handling functions**, and **exhaustive checks**.
- Unlike `void`, which means “returns nothing” (but still returns `undefined`), `never` means **function never returns at all**.
- `never` is a subtype of every type, but **no type is a subtype of `never`**.

👉 **One-line Interview Answer:**
“`never` in TypeScript represents values that never occur. It’s commonly used for functions that never return (like errors or infinite loops) and for exhaustive type checking.”

---

---

## Assertions

### 🔹 What are Assertions in TypeScript?

Assertions tell the TypeScript compiler **how you want to treat a value**.
They don’t change the runtime behavior, only the compile-time type checking.

Think of them as:
👉 _“Hey TypeScript, trust me, I know this value better than you.”_

### 1️⃣ **Type Assertion (`as Type`)**

- Used to tell TS the exact type of a value.
- Similar to type casting in other languages, but no runtime change.

```ts
let someValue: unknown = "Hello TS";

let strLength: number = (someValue as string).length;
```

🔹 Here we **assert** that `someValue` is a `string`, so `.length` is valid.

### 2️⃣ **`as any` Assertion**

- When you **don’t know** or **don’t care** about the type, you can override TypeScript’s type checking.
- Essentially says: _“Treat this as `any`”_.

```ts
let num: number = 10;

// Force treat as any
console.log((num as any).toFixed(1000)); // Compiler won’t complain
```

⚠️ Dangerous because it removes type safety.

### 3️⃣ **`as const` Assertion**

- Freezes the value as a **literal type** instead of a general type.
- Makes objects **readonly** and prevents widening of types.

```ts
let colors = ["red", "blue", "green"] as const;
// type: readonly ["red", "blue", "green"]

// Without "as const" → type would be string[]
```

🔹 Commonly used for constants, enums, or discriminated unions.

### 4️⃣ **Non-Null Assertion (`!`)**

- Used when you know a value is **not null or undefined**, even if TS thinks it might be.

```ts
let name: string | null = "Arpan";

console.log(name!.toUpperCase());
// "!" tells TS: don’t worry, name is not null
```

⚠️ Use carefully — if the value **is actually null**, you’ll get a runtime error.

### 5️⃣ **`satisfies` Keyword (TS 4.9+)**

- Ensures a value **conforms to a type** without changing its inferred type.
- Safer than `as` because it keeps strong type inference.

```ts
type User = { name: string; age: number };

const user = {
  name: "Arpan",
  age: 22,
  extra: "ignored",
} satisfies User;
```

🔹 Difference from `as`:

- `as` **forces** TS to accept type (even if wrong).
- `satisfies` **checks** compatibility while keeping actual type inference.

### 🎯 Quick Interview Summary

| Assertion      | Purpose                                        | Example                      |
| -------------- | ---------------------------------------------- | ---------------------------- |
| `as Type`      | Narrow down / specify type                     | `(value as string).length`   |
| `as any`       | Escape hatch, bypass type safety               | `(value as any).dangerous()` |
| `as const`     | Literal + readonly inference                   | `["a", "b"] as const`        |
| `!` (Non-Null) | Tell TS value is never null                    | `value!.toFixed()`           |
| `satisfies`    | Ensures compatibility without losing inference | `obj satisfies MyType`       |

👉 **One-liner interview answer:**
“Assertions in TypeScript let you override or refine type inference. We have `as Type`, `as any`, `as const`, the non-null `!` operator, and the `satisfies` keyword — each serving different safety vs flexibility trade-offs.”

---

---

## Type Inference

### 🔹 What is Type Inference in TypeScript?

Type Inference is when **TypeScript automatically determines the type of a variable, parameter, or return value** without you explicitly writing it.
👉 In short: **TypeScript guesses the type for you based on how you use it.**

### 🔹 Examples of Type Inference

### 1. Variable Inference

```ts
let count = 10; // inferred as number
// count = "hello"; ❌ Error (because TS inferred `number`)
```

### 2. Function Return Type

```ts
function add(a: number, b: number) {
  return a + b;
}
// TS infers return type as number
```

### 3. Default Parameter Inference

```ts
function greet(name = "Guest") {
  return `Hello, ${name}`;
}
// `name` inferred as string
```

### 4. Contextual Typing

TypeScript can infer the type **based on where the value is used**:

```ts
document.addEventListener("click", (event) => {
  // TS infers event: MouseEvent
  console.log(event.clientX);
});
```

### 5. Best Common Type

When you mix values in an array, TS finds the **common type**:

```ts
let arr = [1, 2, 3]; // number[]
let mixed = [1, "hi"]; // (string | number)[]
```

### 🔹 Why is Type Inference Important?

- Reduces boilerplate (no need to write types everywhere).
- Keeps code clean but still safe.
- Makes TypeScript **smarter than plain JavaScript**, but without being too strict.

✅ **Interview one-liner:**
“Type Inference in TypeScript is when the compiler automatically infers the type of a variable or return value based on how it’s initialized or used. For example, `let x = 10` is inferred as `number` without explicitly writing the type.”

---

---

## Type Compatibility

### 🔹 What is Type Compatibility?

**Type Compatibility** in TypeScript determines whether one type can be assigned to another.
👉 It follows a **structural typing system** (not nominal typing).
This means: **If two types have the same structure, they are considered compatible, even if their names are different.**

### 🔹 Example 1: Basic Object Compatibility

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

p = e; // ✅ Compatible (Employee has all properties of Person)
e = p; // ❌ Error (salary missing)
```

🔑 Rule: **A type with more properties can be assigned to a type with fewer required properties, but not vice versa.**

### 🔹 Example 2: Function Compatibility

TypeScript also checks **function parameter compatibility**:

```ts
let greet = (name: string) => console.log("Hi " + name);
let log = (msg: string, id: number) => console.log(msg, id);

greet = log; // ❌ Error (log requires 2 params, greet only 1)
log = greet; // ✅ OK (extra parameter ignored)
```

🔑 Rule:

- **Fewer parameters → More compatible** (because extra args can be ignored).
- **Return types must also be compatible**.

### 🔹 Example 3: Enums

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
let n: number = s; // ✅ Compatible (enum to number)
let c: Color = Color.Red;

// s = c;  ❌ Error (different enums not compatible)
```

### 🔹 Example 4: Classes

Class compatibility is based on **instance members**, not names:

```ts
class A {
  x: number = 0;
}

class B {
  x: number = 0;
}

let a: A = new B(); // ✅ Compatible (same structure)
```

### 🔹 Example 5: `any` and `unknown`

- `any` is **compatible with everything**.
- `unknown` is **only assignable to itself or `any`**.

```ts
let x: any = 10;
let y: unknown = "hello";

x = y; // ✅ (any accepts everything)
y = x; // ✅ (unknown accepts any, but unsafe in usage)
```

### Interview One-Liner

“Type Compatibility in TypeScript is based on **structural typing**, meaning if two types have the same shape, they’re considered compatible. This applies to objects, functions, classes, enums, and more.”

---

---

# Combining Types

---

## Union Types

### 🔹 Union Types in TypeScript

### ✅ Definition

- **Union types** allow a variable to hold **more than one type**.
- You use the **`|` (pipe symbol)** to define a union type.
- It’s useful when a value can logically be one of several types.

### ✅ Syntax

```ts
let variable: string | number;
```

This means `variable` can be either a **string** OR a **number**.

### ✅ Example 1 – Basic

```ts
let id: string | number;

id = 101; // ✅ number is allowed
id = "ABC123"; // ✅ string is allowed
// id = true;    // ❌ Error, not allowed
```

### ✅ Example 2 – Functions with Union Types

```ts
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log("ID in Uppercase:", id.toUpperCase());
  } else {
    console.log("ID in Number format:", id);
  }
}

printId(101); // ✅
printId("abc123"); // ✅
```

Here, **Type Narrowing** (using `typeof`) ensures correct usage inside the function.

### ✅ Example 3 – Arrays with Union Types

```ts
let data: (string | number)[] = [1, "hello", 42, "typescript"];
```

➡️ The array can contain both **strings** and **numbers**.

### ✅ Example 4 – Union with Custom Types

```ts
type Success = { status: "success"; data: string };
type Error = { status: "error"; message: string };

type ApiResponse = Success | Error;

function handleResponse(res: ApiResponse) {
  if (res.status === "success") {
    console.log("Data:", res.data);
  } else {
    console.log("Error:", res.message);
  }
}
```

➡️ This is very common in **real-world APIs**.

### 🔹 Key Points (for Interview)

- `|` is used to define **union types**.
- A variable can hold **one type at a time**, not both simultaneously.
- Use **type narrowing** (`typeof`, `in`, `instanceof`) to safely work with unions.
- Often combined with **custom types** to model real-world scenarios.

👉 **One-line Interview Answer:**
“Union types in TypeScript let a variable hold multiple possible types using the `|` operator, and we use type narrowing to safely access specific type properties.”

---

---

## Intersection Types

### 🔹 Intersection Types (`&`)

### ✅ Definition

- **Intersection types** combine **multiple types into one**.
- A value of an intersection type must **satisfy all included types simultaneously**.
- You use the **`&` operator** to define them.

📌 Think of it as **“AND”** between types (unlike Union `|` which is **“OR”**).

### ✅ Syntax

```ts
type Combined = TypeA & TypeB;
```

➡️ `Combined` must have **all properties** of `TypeA` **and** `TypeB`.

### ✅ Example 1 – Basic Intersection

```ts
type Person = { name: string };
type Employee = { employeeId: number };

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Arpan",
  employeeId: 101,
};
```

➡️ Here `Staff` must include both `name` (from `Person`) and `employeeId` (from `Employee`).

### ✅ Example 2 – Function Parameters

```ts
type Admin = { role: string };
type User = { username: string };

function printUser(user: User & Admin) {
  console.log(`${user.username} is an ${user.role}`);
}

printUser({ username: "Arpan", role: "Admin" }); // ✅ Works
```

### ✅ Example 3 – With Interfaces

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

➡️ `FlyingCar` must implement **both** methods.

### ✅ Example 4 – Intersection with Union (Advanced)

```ts
type A = { a: string } | { b: string };
type B = { c: string };

type Result = A & B;

// Result becomes: ({ a: string; c: string }) | ({ b: string; c: string });
```

➡️ Useful when combining complex types in **APIs or libraries**.

### 🔹 Difference: Union vs Intersection

\| Feature | Union (`|`) | Intersection (`&`) |
\|---------------------------|-----------------------------------------------|-------------------------------------------|
\| Meaning | Either one type or the other (OR) | Must satisfy all types (AND) |
\| Example | `string | number` → string **or** number | `{name} & {id}` → must have both |
\| Usage | Flexible (input may vary) | Restrictive (object must combine all) |

### 🔹 Key Interview Points

- Union (`|`) = **OR**, Intersection (`&`) = **AND**.
- Intersection creates **a single type with all properties combined**.
- Often used in **mixins**, **API responses**, and **class composition**.
- Be careful: too many intersections can make types **impossible** to satisfy.

👉 **One-line Interview Answer:**
“Intersection types in TypeScript combine multiple types into one using `&`, so a variable must include all properties of the intersected types.”

---

---

## Type Aliases

### 🔹 What are Type Aliases?

- A **Type Alias** lets you **give a name** to a type in TypeScript.
- It doesn’t create a new type — it’s just a **shortcut / alias** for an existing type.
- Helps make code **readable, reusable, and maintainable**.

### 🔹 Syntax

```ts
type AliasName = Type;
```

### 🔹 Examples

### 1. Basic Alias

```ts
type ID = number | string;

let userId: ID = 101; // number
let postId: ID = "p42"; // string
```

👉 Here `ID` is an alias for `number | string`.

### 2. Alias for Object Types

```ts
type User = {
  id: number;
  name: string;
};

const user: User = { id: 1, name: "Arpan" };
```

👉 Instead of repeating `{id: number; name: string;}` everywhere, we reuse `User`.

### 3. Alias with Union

```ts
type Status = "success" | "error" | "loading";

let currentStatus: Status = "success"; // ✅
currentStatus = "error"; // ✅
```

👉 Restricts values to specific string literals.

### 4. Alias with Functions

```ts
type Callback = (data: string) => void;

const log: Callback = (msg) => console.log(msg);
```

👉 `Callback` is a function type alias.

### 5. Alias with Intersection

```ts
type Person = { name: string };
type Employee = { id: number };

type Staff = Person & Employee;

const staff: Staff = { name: "Arpan", id: 101 };
```

### 🔹 Difference: Type Alias vs Interface

| Feature                  | Type Alias                                  | Interface                               |
| ------------------------ | ------------------------------------------- | --------------------------------------- |
| Can define primitives    | ✅ Yes                                      | ❌ No                                   |
| Extendable (Inheritance) | ✅ Yes (via intersections `&`)              | ✅ Yes (`extends`)                      |
| Declaration Merging      | ❌ No                                       | ✅ Yes                                  |
| Use Case                 | Great for **unions, primitives, functions** | Great for **objects & class contracts** |

---

✅ **Interview Answer (Short):**
“A Type Alias in TypeScript gives a custom name to a type, whether primitive, union, object, or function. It improves readability and reusability. Unlike interfaces, type aliases can represent primitives and unions, but interfaces support declaration merging.”

---

---

## keyof Operator

### 🔹 What is `keyof`?

- `keyof` is a **TypeScript type operator**.
- It takes an **object type** and produces a **union of its keys** (as string or number literal types).

👉 Think of it as **"get all property names of a type as a union"**.

### 🔹 Syntax

```ts
type Keys = keyof Type;
```

### 🔹 Examples

### 1. Basic Example

```ts
type User = {
  id: number;
  name: string;
  isActive: boolean;
};

type UserKeys = keyof User;
// "id" | "name" | "isActive"

let key: UserKeys;

key = "id"; // ✅
key = "isActive"; // ✅
key = "email"; // ❌ Error: Type '"email"' is not assignable
```

👉 `keyof User` gives a union `"id" | "name" | "isActive"`.

### 2. With Index Signatures

```ts
type Dictionary = {
  [key: string]: number;
};

type DictKeys = keyof Dictionary;
// string | number
```

👉 If an object uses index signatures, `keyof` returns `string | number`.

### 3. With Functions

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "Arpan" };

let nameValue = getProperty(user, "name"); // string
let idValue = getProperty(user, "id"); // number
```

👉 `keyof` + **generics** allows building **type-safe utilities** like `getProperty`.

### 4. `keyof` with Mapped Types

```ts
type Options = {
  darkMode: boolean;
  notifications: boolean;
};

type Flags = {
  [K in keyof Options]: string;
};

// Equivalent to:
// type Flags = {
//   darkMode: string;
//   notifications: string;
// }
```

👉 Often used in **utility types**.

### 🔹 Real-World Use Case

Imagine you want to build a **type-safe form validator**:

```ts
type Form = {
  email: string;
  password: string;
};

function validateField(field: keyof Form, value: string) {
  console.log(`Validating ${field}: ${value}`);
}

validateField("email", "arpan@test.com"); // ✅
validateField("username", "arpan"); // ❌ Error
```

👉 Prevents passing invalid field names.

### 🔹 Summary (Interview-Friendly)

- `keyof` gives you a **union of keys** from an object type.
- Helps create **type-safe functions** and **utility types**.
- Works great with **generics** for reusable code.

⚡ Common Interview Question:
**“What does `keyof` do in TypeScript, and how would you use it in a real project?”**

👉 Answer:
"`keyof` extracts the property names of a type as a union of string (or number) literal types. It’s useful for creating type-safe functions, like `getProperty`, or building mapped/utility types. For example, in a form validator, using `keyof` ensures we can only reference valid field names."

---

---

## Type Guards / Narrowing - (instanceof, typeof, equality checks, truthiness, and type predicates)

### 🔹 What are Type Guards?

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

👉 The `typeof` check narrowed `id`.

### 🔹 Techniques for Type Guards

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

### ✅ Summary Table

| Technique        | Works On                              | Example                                 |
| ---------------- | ------------------------------------- | --------------------------------------- |
| `typeof`         | Primitives (`string`, `number`, etc.) | `typeof value === "string"`             |
| `instanceof`     | Classes / object instances            | `animal instanceof Dog`                 |
| Equality (`===`) | Literal types, unions                 | `status === "success"`                  |
| Truthiness       | `null`, `undefined`, falsy values     | `if (str) { ... }`                      |
| Type Predicates  | Custom user-defined narrowing         | `function isFish(x): x is Fish { ... }` |

---

---

## Typing Functions and Function Overloading

## 1. **Typing Functions in TypeScript**

In TypeScript, we can define types for a function’s **parameters** and **return value**.
This ensures **type safety** and prevents accidental mistakes.

### Example 1: Basic Function Typing

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

- `a: number` and `b: number` → parameter types
- `: number` → return type

### Example 2: Function Expression Typing

```ts
const greet: (name: string) => string = (name) => {
  return `Hello, ${name}`;
};
```

Here, `(name: string) => string` defines the **function type**.

### Example 3: Optional & Default Parameters

```ts
function logMessage(message: string, user?: string): void {
  console.log(user ? `${user}: ${message}` : message);
}

function multiply(a: number, b: number = 2): number {
  return a * b;
}
```

- `user?: string` → optional parameter
- `b: number = 2` → default parameter

### Example 4: Rest Parameters

```ts
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}
```

---

## 2. **Function Overloading in TypeScript**

Function overloading lets you **define multiple type signatures** for the same function.
Useful when a function behaves differently based on input types.

### Example 1: String vs Number Input

```ts
// Overload signatures
function reverse(str: string): string;
function reverse(arr: number[]): number[];

// Implementation
function reverse(value: string | number[]): string | number[] {
  if (typeof value === "string") {
    return value.split("").reverse().join("");
  } else {
    return value.slice().reverse();
  }
}

console.log(reverse("hello")); // "olleh"
console.log(reverse([1, 2, 3])); // [3, 2, 1]
```

- TypeScript ensures only **valid overload calls** are allowed.
- Implementation signature uses a **union type**.

---

### Example 2: Different Return Types

```ts
function format(value: number): string;
function format(value: string): string;
function format(value: boolean): string;

// Implementation
function format(value: number | string | boolean): string {
  return `Formatted: ${value}`;
}

console.log(format(42)); // "Formatted: 42"
console.log(format("Hi")); // "Formatted: Hi"
console.log(format(true)); // "Formatted: true"
```

✅ **Interview Tip**:

- **Typing functions** → ensures correctness and readability.
- **Overloading** → provides flexibility by defining multiple call signatures.
- In TS, only **one implementation** is allowed, but **multiple overload signatures** can be declared.

---

---

## Generics

### 🔹 What are Generics?

Generics in TypeScript allow you to create **reusable components** that can work with **different data types** while maintaining **type safety**.
They are like **type placeholders** (`T`, `U`, etc.) that get replaced with actual types when the code is used.

✅ Without Generics:

```ts
function identity(value: any): any {
  return value;
}

let result = identity(10); // type: any ❌ (no type safety)
```

✅ With Generics:

```ts
function identity<T>(value: T): T {
  return value;
}

let result1 = identity<number>(10); // type: number
let result2 = identity("Hello"); // type: string
```

Here `T` is a **generic type parameter**. It adapts based on what you pass in.

### 🔹 Generic Types

Generics can be used in **functions, interfaces, classes, and type aliases**.

### Function with Generics

```ts
function getArray<T>(items: T[]): T[] {
  return items;
}

let numArray = getArray<number>([1, 2, 3]); // number[]
let strArray = getArray<string>(["a", "b"]); // string[]
```

### Interface with Generics

```ts
interface Box<T> {
  content: T;
}

let numberBox: Box<number> = { content: 123 };
let stringBox: Box<string> = { content: "Hello" };
```

### Class with Generics

```ts
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  getItems(): T[] {
    return this.data;
  }
}

const stringStorage = new DataStorage<string>();
stringStorage.addItem("Apple");
```

---

### 🔹 Generic Constraints

Sometimes you want to **restrict** what type can be used in Generics. You can use the `extends` keyword.

### Example 1 – Constraint with object type

```ts
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength("Hello"); // ✅ works (string has length)
getLength([1, 2, 3]); // ✅ works (array has length)
// getLength(123);       // ❌ Error (number has no length)
```

### Example 2 – Constraint with keyof

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let person = { name: "Arpan", age: 22 };

getProperty(person, "name"); // ✅ "Arpan"
// getProperty(person, "salary"); // ❌ Error (not in person)
```

### ✅ Interview One-Liners

- **Generics** = write flexible code that works with multiple types safely.
- **Generic Types** = placeholders like `T`, `U`, used in functions, interfaces, classes.
- **Generic Constraints** = restrict what kind of types can be used (using `extends`).

---

---

## Utility Types - (Partial, Pick, Omit, Readonly, Record, Excludev, Extract, Awaited, Parameters, Non Nullable, ReturnType, InstanceType)

Got it 👍 Let’s go step by step. In TypeScript, **Utility Types** are built-in helper types that make it easier to transform or manipulate existing types.

I’ll explain each one with **definition + example** 👇

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
  { name: "Waddewar" } // ✅ only updating name
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

user.name = "Waddewar"; // ❌ Error: Cannot assign to 'name' because it is a read-only property.
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

let status: NonLoadingStatus = "success"; // ✅
status = "loading"; // ❌ Error
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

const s: LoadingStatus = "loading"; // ✅
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

---

---

## Mapped Types

### **Definition**

Mapped Types in TypeScript allow you to **create new types by transforming the properties of an existing type**.
They work by iterating over keys (`keyof`) of a type and applying transformations such as making properties `optional`, `readonly`, or changing their value types.

They are written using the syntax:

```ts
type NewType = {
  [Key in keyof ExistingType]: Transformation;
};
```

### **Example 1 – Basic Mapped Type**

```ts
type Person = {
  name: string;
  age: number;
  location: string;
};

// Mapped type: Make all properties optional
type PartialPerson = {
  [Key in keyof Person]?: Person[Key];
};

const person1: PartialPerson = {
  name: "Arpan", // ✅ age and location are optional now
};
```

### **Example 2 – Readonly Mapped Type**

```ts
type ReadonlyPerson = {
  readonly [Key in keyof Person]: Person[Key];
};

const person2: ReadonlyPerson = {
  name: "Arpan",
  age: 22,
  location: "Bangalore",
};

person2.age = 23; // ❌ Error: Cannot assign to 'age' because it is a read-only property
```

### **Example 3 – Changing Value Types**

You can also change property value types during mapping.

```ts
type BooleanPerson = {
  [Key in keyof Person]: boolean;
};

const person3: BooleanPerson = {
  name: true,
  age: false,
  location: true,
};
```

### **Example 4 – Using `keyof` with Generics**

```ts
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type Features = {
  darkMode: () => void;
  notifications: () => void;
};

type FeatureFlags = OptionsFlags<Features>;

// Result type:
// {
//   darkMode: boolean;
//   notifications: boolean;
// }
```

### **Why Mapped Types are Powerful?**

- They allow **reusability** instead of manually rewriting types.
- Many **utility types** in TypeScript (like `Partial`, `Pick`, `Omit`, `Readonly`, `Record`) are built using **mapped types**.

✅ **In short (for interview):**
Mapped Types let you transform the properties of an existing type using `keyof` and `[Key in keyof Type]`. They’re the building blocks behind utility types like `Partial`, `Pick`, and `Readonly`.

---

---

## Conditional Types

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

### ✅ **Key Points for Interviews**

1. **Syntax**: `T extends U ? X : Y`
2. Conditional Types let types behave differently based on conditions.
3. They are often combined with **`infer`** for type inference.
4. Many **utility types (Exclude, Extract, ReturnType, InstanceType, Awaited)** are built using conditional types.
5. They support **distributive behavior** when working with unions.

---

---

## Literal Types

### **Definition**

A **literal type** is a type that represents **a specific value**, rather than a broad category.

- In JavaScript, values like `"hello"`, `42`, or `true` are **literals**.
- In TypeScript, you can use those literal values **as types**.

This means instead of just `string`, you can say `"hello"` is the only allowed value.

### **Example 1 – String Literal Types**

```ts
type Direction = "up" | "down" | "left" | "right";

let move: Direction;

move = "up"; // ✅ valid
move = "left"; // ✅ valid
move = "forward"; // ❌ Error - not assignable
```

👉 Here `"up" | "down" | "left" | "right"` is a **union of string literals**.

### **Example 2 – Number Literal Types**

```ts
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

let roll: DiceRoll;

roll = 3; // ✅ valid
roll = 7; // ❌ Error
```

### **Example 3 – Boolean Literal Types**

```ts
type Answer = true | false;

let yesNo: Answer;

yesNo = true; // ✅
yesNo = false; // ✅
yesNo = "yes"; // ❌
```

_(Though usually you just use `boolean`, literal types can restrict to only `true` or only `false`.)_

### **Example 4 – Narrowing with Literals**

```ts
function printStatus(status: "success" | "error") {
  console.log(status);
}

printStatus("success"); // ✅
printStatus("pending"); // ❌
```

👉 Very useful for APIs where only specific values are valid.

### **Example 5 – Const and Literal Inference**

When you use `const`, TypeScript **infers literal types** instead of broad ones.

```ts
let a = "hello"; // type: string
const b = "hello"; // type: "hello"
```

👉 `a` can be reassigned to any string,
👉 `b` is fixed to `"hello"`.

### **Example 6 – Literal Types + Union = Enums Alternative**

Instead of `enum`, you can make a literal union:

```ts
type Color = "red" | "green" | "blue";

function setColor(c: Color) {
  console.log(`Color set to ${c}`);
}

setColor("red"); // ✅
setColor("yellow"); // ❌
```

### ✅ **Key Interview Points**

1. **Literal types** represent exact values (`"yes"`, `42`, `true`) instead of general ones (`string`, `number`, `boolean`).
2. They’re often combined with **union types** to restrict values to a fixed set.
3. `const` variables infer literal types.
4. Useful in **function parameters**, **APIs**, and **state machines** where only certain values are allowed.
5. They are a lightweight alternative to enums.

---

---

## Template Literal Types

### 🔹 **What are Template Literal Types?**

Template Literal Types in TypeScript allow you to build new **string literal types** by combining existing string literal types using **template string syntax** (similar to JavaScript template strings with backticks `` `...` ``).

They are **type-level string manipulation tools** introduced in TypeScript 4.1.

### 🔹 **Basic Syntax**

```ts
type Greeting = `Hello, ${string}`;
```

Here, `Greeting` is any string starting with `"Hello, "` followed by any string.

### 🔹 **Examples**

### 1. Simple Concatenation

```ts
type Role = "admin" | "user";
type Status = "active" | "inactive";

type UserRoleStatus = `${Role}-${Status}`;

// Equivalent to:
// "admin-active" | "admin-inactive" | "user-active" | "user-inactive"
```

✅ This generates all possible string combinations.

### 2. Enforcing String Patterns

```ts
type ID = `user_${number}`;

let id1: ID = "user_123"; // ✅ valid
let id2: ID = "admin_456"; // ❌ Error: not assignable to `user_${number}`
```

✅ Useful for structured identifiers (like `"order_123"`, `"invoice_456"`).

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

let url1: Endpoint = "/api/user"; // ✅
let url2: Endpoint = "/api/product"; // ✅
let url3: Endpoint = "/api/order"; // ❌ Error
```

### 🔹 **Why Use Template Literal Types?**

- Enforce **string patterns** at compile time.
- Prevent typos in API endpoints, event handlers, role names, etc.
- Combine with **utility types** (`Uppercase`, `Capitalize`, etc.) for flexible string transformations.

✅ **In short (Interview-ready)**:
Template Literal Types allow you to build **new string literal types** using template string syntax. They are powerful for enforcing **string patterns** and combining unions into all possible string combinations.

---

---

## Recursive Types

### 🔹 **What are Recursive Types?**

A **recursive type** is a type that **references itself** as part of its definition.
They are useful for representing **nested or hierarchical structures** like trees, JSON, linked lists, etc.


### 🔹 **Basic Example**

```ts
type NestedArray<T> = T | NestedArray<T>[];

let numbers: NestedArray<number>;
numbers = 5;             // ✅
numbers = [1, 2, [3, 4]]; // ✅
numbers = [[1], [[2]]];  // ✅
```

Here, `NestedArray<T>` calls itself inside its own definition → **recursion**.


### 🔹 **Common Use Cases**

### 1. **JSON Data Type**

```ts
type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

const data: JSONValue = {
  name: "Arpan",
  age: 22,
  skills: ["React", "TypeScript"],
  address: {
    city: "Bangalore",
    zip: 560001,
  },
};
```

✅ This models **arbitrary JSON structures**.


### 2. **Tree Structure**

```ts
type TreeNode = {
  value: string;
  children?: TreeNode[]; // recursive reference
};

const tree: TreeNode = {
  value: "root",
  children: [
    {
      value: "child-1",
      children: [{ value: "grandchild-1" }],
    },
    { value: "child-2" },
  ],
};
```

✅ Represents hierarchical data like a DOM tree, org chart, or file system.


### 3. **Linked List**

```ts
type LinkedList<T> = {
  value: T;
  next?: LinkedList<T>; // recursive reference
};

const list: LinkedList<number> = {
  value: 1,
  next: { value: 2, next: { value: 3 } },
};
```

✅ Models **linked list nodes**.


### 4. **Union Recursive Type**

```ts
type Expression =
  | number
  | { add: [Expression, Expression] }
  | { mul: [Expression, Expression] };

const expr: Expression = {
  mul: [
    { add: [1, 2] },
    { add: [3, { mul: [4, 5] }] },
  ],
};
```

✅ Useful for defining **mathematical expressions**, compilers, or DSLs.


### 🔹 **Key Notes**

* Recursive types allow **infinite depth** in data structures.
* Must always have a **base case** (like `string | number` in `JSONValue`).
* Without a base case → TypeScript will complain about **circular references**.
* Often combined with **generics** for flexibility.


✅ **In short (Interview-ready)**:
Recursive Types are types that reference themselves inside their definition. They’re useful for representing nested structures such as JSON, trees, linked lists, or expressions.

---
---