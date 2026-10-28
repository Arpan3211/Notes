# Anonymous functions

> A function without a name, used where it is needed once and need not be reused.

```js
const square = function (n) { return n * n; };   // function expression (anonymous)
const cube = (n) => n ** 3;                       // arrow function (anonymous)
```

## Where they are used

| Use | Example |
|---|---|
| Callbacks / array methods | `[1, 2, 3].map(function (n) { return n * n; })` |
| Event handlers | `btn.addEventListener("click", () => alert("hi"))` |
| Promise chains | `fetch(url).then((res) => res.json())` |
| [IIFE](iife.md) | `(function () { /* ... */ })();` |
| Returned functions | `const mult = (f) => (n) => n * f;` |
| `setTimeout` | `setTimeout(() => run(), 1000)` |

## Pros and cons

- Pros: short, local, no extra names in the scope.
- Cons: no name in stack traces (harder to debug), cannot call itself by name, cannot be reused or removed (`removeEventListener` needs the same reference).

## Remember

- A function expression assigned to a variable gets that name for debugging (`square.name` is `"square"`), but it is still "anonymous" in syntax.
- Prefer a **named** function expression for recursion and clear stack traces.
