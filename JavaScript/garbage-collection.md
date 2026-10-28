# Garbage collection

> JavaScript frees memory automatically: anything that can no longer be **reached** from the roots is removed.

## How it decides

| Idea | Meaning |
|---|---|
| **Reachability** | an object stays alive while something references it, starting from the roots (global object, call stack, closures) |
| **Mark and sweep** (used by V8) | mark everything reachable from the roots, then free what is not marked |
| **Reference counting** (old) | free at 0 references, but cannot free circular references, so engines no longer use it alone |
| **Generational GC** | new objects go to a young generation (collected often, most die young), survivors move to an old generation (collected rarely) |

```js
function create() {
  let obj = { data: "temp" };   // allocated
}                                // after the call nothing references obj -> collectable
create();

let a = { name: "A" };
let b = a;
a = null;      // still reachable through b
b = null;      // now unreachable -> collectable
```

Circular references are fine with mark and sweep:

```js
let x = {}; let y = {};
x.y = y; y.x = x;
x = y = null;   // both are unreachable, so both are freed
```

## Common memory leaks

| Cause | Fix |
|---|---|
| Accidental globals (`x = 1` without `let`) | use strict mode, declare variables |
| Event listeners never removed | `removeEventListener`, `{ once: true }`, cleanup on unmount |
| Timers (`setInterval`) never cleared | `clearInterval` |
| Closures holding big objects | do not capture what you do not need |
| Detached DOM nodes still referenced | set references to `null` |
| Growing caches and maps | use `WeakMap` / `WeakRef` or an [LRU cache](lru-cache.md) |

## Remember

- You cannot force GC from code. Chrome DevTools > Memory (heap snapshots) finds leaks.
- GC pauses can cause jank, so avoid creating lots of short-lived objects in hot loops.
- Related: [closures](closures.md), [Map vs WeakMap](map-vs-weakmap.md).
