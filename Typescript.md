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
