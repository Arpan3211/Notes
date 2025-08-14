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
