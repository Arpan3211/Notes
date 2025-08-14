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
  `npm init`
- Install TypeScript as a project dependency by running the following command:
  `npm install --save-dev typescript`
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
  `npx tsc`
  Note: You can also compile individual TypeScript files by specifying the file path after the tsc command. For example:

`npx tsc ./src/index.ts`
And you're all set! You can now start writing TypeScript code in your project.
