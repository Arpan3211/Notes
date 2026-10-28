# Execution context

> The environment in which JavaScript code runs: it holds variables, functions, the scope chain and `this`.

## Types

| Type | Created when |
|---|---|
| Global (GEC) | the script starts (only one). `this` is `window` / `globalThis` |
| Function (FEC) | every time a function is called |
| Eval | inside `eval()` (avoid) |

## What each context holds

1. **Variable environment**: variables, function declarations, arguments.
2. **Lexical environment**: link to the outer environment (the scope chain).
3. **`this` binding**.

## Two phases

1. **Creation phase** (memory setup)
   - `var` variables are created with `undefined`.
   - Function declarations are stored completely.
   - `let` / `const` are created but uninitialised (TDZ).
   - This is why [hoisting](hoisting-and-tdz.md) happens.
2. **Execution phase**: code runs line by line, values are assigned and functions are called.

## Call stack

A stack of execution contexts (LIFO): the global context is at the bottom. Calling a function pushes a new context, and returning pops it.

```js
function multiply(a, b) { return a * b; }
function calc() { return multiply(2, 3); }
calc();
```

```text
multiply()  <- top (running)
calc()
Global
```

Too many nested calls without returning cause `RangeError: Maximum call stack size exceeded` (stack overflow).

## Global vs script context (browser)

- The global context is created **once** when the page starts. `window` is the global object.
- Every `<script>` (inline or external) runs inside that same global context, so its `var` variables and function declarations become properties of `window`.
- `let` / `const` at the top level are global too, but they are **not** properties of `window`.
- `<script type="module">` has its own private scope: nothing leaks to `window`.

```html
<script>      var a = 1; </script>
<script>      console.log(window.a); /* 1 */ </script>
<script type="module"> let b = 2; console.log(window.b); /* undefined */ </script>
```

## Remember

- One call stack means one thing runs at a time (see [event loop](event-loop.md)).
- A closure keeps its lexical environment alive after the function's context is popped.
