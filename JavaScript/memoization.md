# Memoization

> Caching the result of a function call by its arguments, so the same call is not computed twice.

```js
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);   // cache hit
    const result = fn.apply(this, args);         // cache miss
    cache.set(key, result);
    return result;
  };
}

const slowSquare = (n) => { /* heavy work */ return n * n; };
const fastSquare = memoize(slowSquare);
fastSquare(9);   // computed
fastSquare(9);   // from cache
```

## Fibonacci

To speed up a recursive function, the **recursive calls** must use the memoized version.

```js
const fib = memoize((n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2)));
fib(40);   // fast
```

`memoize(fibonacci)` with a separately defined `fibonacci` only caches the top-level call.

## When to use

- Pure functions with expensive work and repeated inputs.
- Not for impure functions (the result changes) or inputs that are almost always different (the cache just grows).

## Limits

- Needs a way to build the key. `JSON.stringify` fails for functions and circular objects, and ignores key order differences. For a single object argument, a `WeakMap` keyed by the object avoids this.
- Memory grows without a limit. Add a size limit or expiry (see [LRU cache](lru-cache.md)).
- Related: React `useMemo`, `React.memo`, and reselect.

## Remember

- It uses a [closure](closures.md) to keep the cache private.
- It works because the function is [pure](pure-vs-impure.md).
