# Strict mode

> An opt-in, stricter variant of JavaScript that turns silent mistakes into errors.

## Enable

```js
"use strict";            // top of a file: whole script

function f() {
  "use strict";          // top of a function: only that function
}
```

ES modules and class bodies are strict automatically.

## What changes

| Rule | Normal mode | Strict mode |
|---|---|---|
| Undeclared variable `x = 3` | creates a global | `ReferenceError` |
| Writing to a read-only property | silently ignored | `TypeError` |
| `this` in a plain function call | the global object | `undefined` |
| Duplicate parameter names | allowed | `SyntaxError` |
| `with` statement | allowed | `SyntaxError` |
| Deleting a variable | ignored | error |
| Octal literals (`010`) | allowed | error |

```js
"use strict";
x = 3.14;                       // ReferenceError: x is not defined
(function () { console.log(this); })();   // undefined
function sum(a, a) {}           // SyntaxError
```

## Pros and cons

- Pros: catches bugs early, safer, easier to optimise, prepares code for modern JS.
- Cons: can break old code that relies on loose behaviour, and migrating a large codebase takes effort.

## Remember

- Put `"use strict"` first, or it is ignored.
- Tools like ESLint and TypeScript, and ES modules, make this the default today.
