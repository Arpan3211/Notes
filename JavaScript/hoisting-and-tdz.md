# Hoisting and Temporal Dead Zone

> Hoisting: declarations are registered before the code runs, so names can be used earlier in their scope. TDZ: `let`, `const` and `class` exist but cannot be touched before their declaration line. Full detail: [revision sheet](../../Revision/JavaScript/hoisting-and-tdz.md).

## What happens to each declaration

| Declaration | Before its line |
|---|---|
| `var` | `undefined` |
| `let` / `const` / `class` | `ReferenceError` (TDZ) |
| Function declaration | works, can be called early |
| Function expression / arrow (`var f = ...`) | `undefined`, so calling it gives `TypeError` |

```js
console.log(a);   // undefined
var a = 10;

hello();          // "Hello!"
function hello() { console.log("Hello!"); }

sayHi();          // TypeError: sayHi is not a function
var sayHi = function () {};

console.log(b);   // ReferenceError: Cannot access 'b' before initialization
let b = 5;
```

## Why it happens

The engine has a creation phase: it scans the scope first, then runs the code (see [execution context](execution-context.md)). Nothing is physically moved.

## Temporal Dead Zone

- The period from the start of the block until the `let` / `const` line runs.
- Reading **or writing** the variable in this period throws `ReferenceError`.
- It exists to stop use of uninitialised variables.

```js
{
  // TDZ for x starts
  // console.log(x);  // ReferenceError
  let x = 3;          // TDZ ends
}
```

## Remember

- Only declarations are hoisted, not assignments.
- `var` is function scoped, `let` / `const` are block scoped.
- Declare variables at the top of their scope and prefer `const` / `let`.
