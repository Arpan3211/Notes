# Closures

> A closure is a function that remembers the variables of the scope where it was created, even after that scope has finished. Full detail: [revision sheet](../../Revision/JavaScript/closures.md).

```js
function outer() {
  let count = 0;           // private variable
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
counter();   // 1
counter();   // 2   (count survives after outer() returned)
```

## How it works

- Every function keeps a reference to the scope it was **created** in (lexical scope).
- That scope is not garbage collected while the function can still be called.
- The closure holds a live reference to the variable, not a copy of the value.

## Uses

| Use | Example |
|---|---|
| Private data | counters, modules (`Counter()` returning `increment` and `getCount`) |
| Function factories | `const double = multiplier(2)` |
| Currying and memoization | the inner function remembers earlier arguments or a cache |
| Debounce and throttle | the timer id lives in the closure |
| Callbacks and event handlers | they remember the surrounding variables |

## Loop trap

```js
for (var i = 1; i <= 3; i++) setTimeout(() => console.log(i), 0);   // 4 4 4
for (let i = 1; i <= 3; i++) setTimeout(() => console.log(i), 0);   // 1 2 3
```

`var` shares one `i`. `let` creates a new `i` per iteration.

## Pitfalls

- Memory leaks: a closure keeps its captured data alive (clear timers and listeners).
- Stale values: the closure sees the variable's latest value, which is a common React bug ("stale closure").

## Interview answer

A closure is an inner function that has access to its outer function's variables even after the outer function has returned, because of lexical scoping.
