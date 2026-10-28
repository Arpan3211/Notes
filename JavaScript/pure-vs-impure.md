# Pure vs impure functions

> A pure function gives the same output for the same input and has no side effects.

## Pure

1. **Deterministic**: the output depends only on the arguments.
2. **No side effects**: it does not change anything outside itself (globals, arguments, DOM, files, network, console).

```js
const add = (a, b) => a + b;                 // pure
const addItem = (arr, x) => [...arr, x];     // pure (returns a new array)
```

## Impure

```js
let count = 0;
function increment() { count += 1; return count; }   // changes outside state

function addItem(arr, x) { arr.push(x); return arr; } // mutates its argument
Math.random();  new Date();  console.log("x");        // impure by nature
```

## Compare

| | Pure | Impure |
|---|---|---|
| Same input gives same output | always | not guaranteed |
| Side effects | none | possible |
| Testing | easy | needs mocks or setup |
| Memoizable | yes | no |
| Examples | maths, `map`, `filter`, reducers | I/O, API calls, DOM updates, timers |

## Remember

- Real apps need impure code (I/O). Keep it at the edges and the logic pure.
- React components and Redux reducers should be pure.
- `map`, `filter` and `reduce` are pure if the callback is. `sort` and `push` mutate.
- Pure functions can be [memoized](memoization.md).
