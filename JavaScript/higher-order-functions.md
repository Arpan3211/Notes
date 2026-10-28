# First-class and higher-order functions

> Functions are values in JavaScript (**first-class**). A **higher-order function** takes a function as an argument, returns a function, or both.

## First-class: functions can be

```js
const add = function (a, b) { return a + b; };   // stored in a variable

const ops = { add, sub: (a, b) => a - b };       // stored in an object or array
ops.sub(5, 2);                                   // 3

function greet(name) { console.log("Hello, " + name); }
function run(fn) { fn("John"); }                 // passed as an argument
run(greet);                                      // Hello, John

function multiplier(f) { return (n) => n * f; } // returned from a function
multiplier(2)(5);                                // 10
```

## Higher-order functions

```js
// takes a function
const evens = [1, 2, 3, 4, 5, 6].filter((n) => n % 2 === 0);   // [2, 4, 6]

// returns a function
const operation = (op) => (a, b) => op(a, b);
const add = operation((a, b) => a + b);
add(5, 3);   // 8
```

Built-in examples: `map`, `filter`, `reduce`, `forEach`, `sort`, `setTimeout`, `addEventListener`.

## Why they matter

- Reuse logic and pass behaviour as data.
- They power [callbacks](callbacks.md), [currying](currying.md), [closures](closures.md) and functional programming.

## Remember

- First-class = the language feature. Higher-order = a function that uses that feature.
- A callback is a function passed to a higher-order function.
