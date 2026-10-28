# Void


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
  return undefined; //  allowed
  // return 5;  Error
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
| **`void`** | Indicates a function **does not return any useful value** (usually returns `undefined` internally). | Function return type when result is irrelevant.                           | Only `undefined` (or `null` if `--strictNullChecks` is off). | `ts function log(): void { console.log("Hello"); } `       | Callback/event handler return types, ignoring Promise results. |
| **`null`** | Intentional absence of any object value.                                                            | Represent “no value” explicitly.                                          | Only `null`.                                                 | `ts let data: null = null; `                               | Database results, optional config values.                      |
| **`undefined`** | A variable has been declared but not assigned a value (default in JS).                              | Represent “value not assigned yet”.                                       | Only `undefined`.                                            | `ts let value: undefined = undefined; `                    | Optional parameters, default uninitialized variables.          |
| **`never`** | Represents a value that **can never exist**.                                                        | For functions that **never return** (e.g., throw error or infinite loop). | No value can be assigned.                                    | `ts function fail(): never { throw new Error("Error"); } ` | Exhaustive checks in `switch`, error throwing functions.       |

### **Quick Mnemonics**

- **`void`** → “Don’t expect a return.”
- **`null`** → “I put nothing here, on purpose.”
- **`undefined`** → “Nothing here… yet.”
- **`never`** → “This will never happen.”
