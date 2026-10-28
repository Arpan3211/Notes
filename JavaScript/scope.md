# Scope

> Scope decides where a variable can be used. JavaScript has global, function and block scope, and uses lexical (written-position) scoping.

## Kinds of scope

| Scope | Created by | Variables |
|---|---|---|
| Global | the top level of a script | `var`, `let`, `const`, functions |
| Function | a function body | `var` (and everything inside) |
| Block | `{ }` of `if`, `for`, `while`, a bare block | `let`, `const` (not `var`) |

## `var` vs `let` vs `const`

| | `var` | `let` | `const` |
|---|---|---|---|
| Scope | function | block | block |
| Reassign | yes | yes | no |
| Redeclare in same scope | yes | no | no |
| Hoisting | hoisted, value `undefined` | hoisted, in TDZ | hoisted, in TDZ |

```js
function demo() {
  if (true) {
    var a = "function scope";
    let b = "block scope";
  }
  console.log(a);  // "function scope"
  console.log(b);  // ReferenceError: b is not defined
}
```

## Scope chain

When a variable is used, the engine looks in the current scope, then each outer scope, up to global. The first match wins (inner names shadow outer ones).

```js
const x = "global";
function outer() {
  const y = "outer";
  function inner() {
    const z = "inner";
    console.log(x, y, z);   // all found through the scope chain
  }
  inner();
}
outer();
```

## Remember

- Scope is fixed where the code is **written** (lexical), not where it is called.
- Prefer `const`, then `let`. Avoid `var`.
- A function remembers its scope: that is a [closure](closures.md). See also [hoisting and TDZ](hoisting-and-tdz.md).
