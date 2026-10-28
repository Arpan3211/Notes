# Event loop (and why JavaScript is single-threaded)

> JavaScript runs one thing at a time on one call stack. The event loop lets it handle async work by moving finished callbacks onto the stack when it is empty. Full detail: [revision sheet](../../Revision/JavaScript/event-loop.md).

## Parts

| Part | Role |
|---|---|
| **Call stack** | the functions running now (one at a time) |
| **Web APIs** (browser) / libuv (Node) | do timers, network, DOM events in the background |
| **Macrotask queue** | callbacks from `setTimeout`, `setInterval`, DOM events, I/O |
| **Microtask queue** | promise `.then` / `await`, `queueMicrotask`, `MutationObserver` |
| **Event loop** | when the stack is empty, runs **all** microtasks, then **one** macrotask, and repeats |

Priority: **sync code, then microtasks, then macrotasks**.

```js
console.log("Start");                                   // 1
setTimeout(() => console.log("Timeout"), 0);            // 4 (macrotask)
Promise.resolve().then(() => console.log("Promise"));   // 3 (microtask)
console.log("End");                                     // 2

// Start, End, Promise, Timeout
```

## Why single-threaded?

- Simple: no race conditions or deadlocks on shared data (the DOM).
- Predictable order of execution.
- Async tasks (network, timers) run outside the thread, so the page still responds.
- Downside: a long synchronous task blocks everything (use chunks, Web Workers or `requestIdleCallback`).

## Remember

- `setTimeout(fn, 0)` runs after the current code **and** all microtasks.
- Endless microtasks can starve the loop (timers and rendering never run).
- In Node, `process.nextTick` runs before promise microtasks.
- Related: [promises](promises.md), [async/await](async-await.md), [closures](closures.md).
