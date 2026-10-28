# Callbacks

> A callback is a function passed to another function, to be called later (after an async task or an event).

```js
function fetchData(url, callback) {
  setTimeout(() => callback("data from " + url), 1000);   // simulated request
}

fetchData("/api/user", (data) => console.log(data));
```

## Types

- **Synchronous**: called immediately, e.g. `[1, 2, 3].map((n) => n * 2)`.
- **Asynchronous**: called later, e.g. `setTimeout`, event listeners, file or network I/O.

## Error-first convention (Node.js)

```js
fs.readFile("a.txt", (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});
```

## Callback hell

Nested callbacks become hard to read and handle errors in.

```js
getUser(id, (user) => {
  getOrders(user, (orders) => {
    getItems(orders[0], (items) => { /* ... */ });
  });
});
```

Fix with [promises](promises.md) and `async/await`, or by naming and splitting the functions.

## Remember

- Pass the function itself (`fn`), do not call it (`fn()`).
- Callbacks are possible because functions are values (see [higher-order functions](higher-order-functions.md)).
