# async / await

> Syntax on top of promises that makes asynchronous code read like synchronous code.

- `async` before a function: it always returns a **promise** (a returned value is wrapped, a `throw` becomes a rejection).
- `await` pauses **that function** until the promise settles, and gives its value (or throws its error). It works inside `async` functions (and at the top level of ES modules).

```js
function fetchData() {
  return new Promise((resolve) => setTimeout(() => resolve("data"), 1000));
}

async function getData() {
  try {
    const data = await fetchData();
    console.log("Received", data);
  } catch (err) {
    console.error("Error:", err);   // rejected promises land here
  } finally {
    console.log("done");
  }
}
getData();
```

## Sequential vs parallel

```js
// Sequential: 2 seconds total
const a = await task(1000);
const b = await task(1000);

// Parallel: 1 second total
const [x, y] = await Promise.all([task(1000), task(1000)]);
```

Only `await` one after another when the second call needs the first result.

## In loops

```js
for (const id of ids) await save(id);                 // one at a time
await Promise.all(ids.map((id) => save(id)));         // all at once
ids.forEach(async (id) => await save(id));            // does NOT wait (avoid)
```

## Under the hood

`await x` splits the function: the code after it is queued as a **microtask** when `x` settles. The rest of the program keeps running meanwhile (see [event loop](event-loop.md)).

## Remember

- `await` does not block the thread, only the current async function.
- Forgetting `await` gives you a pending promise instead of the value.
- A [promise](promises.md) rejection without `try/catch` or `.catch` is an unhandled rejection.
