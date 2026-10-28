# Promises

> A promise is an object for a value that will be available later: either a result (fulfilled) or a reason for failure (rejected).

## States

| State | Meaning |
|---|---|
| **pending** | the operation has not finished |
| **fulfilled** | finished with a value (`resolve`) |
| **rejected** | failed with an error (`reject`) |

Fulfilled and rejected are **settled**. A settled promise never changes again.

## Create and use

```js
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ok = true;
      ok ? resolve("data") : reject(new Error("failed"));
    }, 1000);
  });
}

fetchData()
  .then((data) => console.log("Got", data))
  .catch((err) => console.error(err))
  .finally(() => console.log("done"));   // runs either way
```

## Chaining

Each `.then` returns a **new promise**, so tasks run one after another. The returned value is passed to the next step.

```js
new Promise((resolve) => setTimeout(() => resolve(1), 1000))
  .then((r) => r * 2)     // 2
  .then((r) => r * 3)     // 6
  .then((r) => console.log(r));   // 6
```

- Return a promise from `.then` and the chain waits for it.
- An error (`throw` or rejection) skips to the next `.catch`.
- A `.catch` that returns normally makes the chain continue as fulfilled.

## Combinators

| Method | Result | Fails when |
|---|---|---|
| `Promise.all([...])` | array of results, in input order | **any** rejects (fails fast) |
| `Promise.allSettled([...])` | array of `{status, value/reason}` | never |
| `Promise.race([...])` | the first promise to **settle** (value or error) | the first one rejects |
| `Promise.any([...])` | the first **fulfilled** value | **all** reject (`AggregateError`) |
| `Promise.resolve(x)` / `Promise.reject(e)` | an already settled promise | |

```js
await Promise.all([fetch(a), fetch(b)]);        // parallel, all needed
await Promise.allSettled([p1, p2]);             // want every outcome
await Promise.race([fetch(url), timeout(3000)]);   // timeout pattern
await Promise.any([mirror1(), mirror2()]);      // fastest success
```

## Remember

- `.then` callbacks run as **microtasks**, before timers (see [event loop](event-loop.md)).
- Always handle errors (`.catch` or `try/catch` with `await`), or you get an unhandled rejection.
- The executor function runs immediately (synchronously), the `.then` callbacks run later.
- Use [async/await](async-await.md) for cleaner code.
