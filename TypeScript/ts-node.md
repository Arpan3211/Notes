# Ts-node


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

 Output:

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
