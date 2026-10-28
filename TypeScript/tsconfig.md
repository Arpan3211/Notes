# Tsconfig.json


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
| `strict`                     | Turns on **all strict mode checks** | `true`  |
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
| `composite`       | Required for **project references** | `true`             |
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

console.log(add(5, 10)); //  Works
console.log(add("5", 10)); //  Type error in editor
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
