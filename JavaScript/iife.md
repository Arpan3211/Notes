# IIFE (Immediately Invoked Function Expression)

> A function that is defined and called at the same moment. Used to create a private scope.

```js
(function () {
  var secret = 42;
  console.log("Private:", secret);   // Private: 42
})();

(() => console.log("arrow IIFE"))();

(async () => {
  const data = await fetch("/api");    // top-level await alternative
})();
```

## Why parentheses

They turn the `function` keyword into an **expression**. Without them it is a declaration and cannot be called straight away.

## Uses

| Use | Example |
|---|---|
| Private variables, no globals | module pattern |
| Run setup code once | initialisation |
| Fix the `var` loop problem (before `let`) | copy `i` into the IIFE scope |
| Use `await` where top-level await is not available | async IIFE |

```js
const counter = (function () {
  let count = 0;
  return { inc: () => ++count, get: () => count };
})();
counter.inc();
counter.get();   // 1   (count is private)
```

## Remember

- Variables inside are not reachable from outside (see [closures](closures.md)).
- ES modules and `let` / `const` blocks have replaced most uses today.
